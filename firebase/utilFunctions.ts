import * as Device from "expo-device";
import * as DocumentPicker from "expo-document-picker";
import * as FileSystem from "expo-file-system";
import { StorageAccessFramework } from "expo-file-system";
import {
  getDownloadURL,
  getMetadata,
  listAll,
  ref,
  uploadBytes,
  UploadMetadata,
} from "firebase/storage";
import { AlarmDisplayInfo } from "../types";
import { storage } from "./firebaseConfig";

export const listFiles = async (): Promise<AlarmDisplayInfo[]> => {
  const listRef = ref(storage);

  const filesList = await listAll(listRef);

  const metaData = filesList.items.map(async (itemRef) => {
    const data = await getMetadata(itemRef);
    return {
      name: data.name,
      composer: data.customMetadata?.composerName || "unknown",
    };
  });

  const files = await Promise.all(metaData);
  return files;
};

export const uploadFile = async (composerName: string) => {
  const file = await DocumentPicker.getDocumentAsync({
    copyToCacheDirectory: false,
    type: "audio/*",
  });

  if (file.type === "success" && file.name) {
    const metadata: UploadMetadata = {
      customMetadata: { composerName },
    };
    const uploadRef = ref(storage, file.name);

    if (file.file) {
      await uploadBytes(uploadRef, file?.file, metadata).then(() => {
        console.log(`uploaded: Alarm named ${file.name} by ${composerName}`);
      });
    } else {
      const uri = FileSystem.documentDirectory + file.name;

      await FileSystem.copyAsync({
        from: file.uri,
        to: uri,
      });

      const localF = await fetch(uri);
      const blob = await localF.blob();

      await uploadBytes(uploadRef, blob, metadata).then(() => {
        console.log(`uploaded: Alarm named ${file.name} by ${composerName}`);
      });
    }
  }
};

export const replaceDownloadedFile = async (
  newAlarm: string,
  oldAlarm?: string
) => {
  const dlURL = await getDownloadURL(ref(storage, newAlarm));
  let dlLocation: string | undefined;

  if (Device.brand) {
    const downloadResumable = FileSystem.createDownloadResumable(
      dlURL,
      FileSystem.documentDirectory + newAlarm,
      {}
    );

    if (oldAlarm) {
      try {
        await FileSystem.deleteAsync(FileSystem.documentDirectory + oldAlarm);
      } catch (e) {
        console.log(e);
      }
    }

    try {
      const dlRes = await downloadResumable.downloadAsync();
      dlLocation = dlRes?.uri;
      if (dlLocation) {
        const newLocation = await saveAndroidFile(dlLocation, newAlarm);
        if (newLocation)
          dlLocation = `/storage/emulated/0/${
            newLocation
              .replace(/%3A/g, ":")
              .replace(/%2F/g, "/")
              .replace(/%20/g, " ")
              .split(":")
              .slice(-1)[0]
          }`;
      }
    } catch (e) {
      console.log(e);
    }
  }

  return { url: dlURL, location: dlLocation };
};

const saveAndroidFile = async (fileUri: string, fileName: string) => {
  let location: string | undefined;
  try {
    const fileString = await FileSystem.readAsStringAsync(fileUri, {
      encoding: FileSystem.EncodingType.Base64,
    });

    const permissions =
      await StorageAccessFramework.requestDirectoryPermissionsAsync();
    if (!permissions.granted) {
      return;
    }

    try {
      await StorageAccessFramework.createFileAsync(
        permissions.directoryUri,
        fileName,
        "audio/mpeg"
      )
        .then(async (uri) => {
          await FileSystem.writeAsStringAsync(uri, fileString, {
            encoding: FileSystem.EncodingType.Base64,
          });
          location = uri;
        })
        .catch((e) => {});
    } catch (e: any) {
      throw new Error(e);
    }
  } catch (err: any) {
    throw new Error(err);
  }

  return location;
};
