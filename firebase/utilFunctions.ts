import * as DocumentPicker from "expo-document-picker";
import * as FileSystem from "expo-file-system";
import {
  getDownloadURL,
  getMetadata,
  listAll,
  ref,
  uploadBytes,
  UploadMetadata,
} from "firebase/storage";
import { storage } from "./firebaseConfig";
import * as Device from "expo-device";

export const listFiles = async () => {
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
  setDownloadProgress: React.Dispatch<React.SetStateAction<number | undefined>>,
  newAlarm?: string,
  oldAlarm?: string
) => {
  if (!newAlarm) {
    console.log("No alarm selected");
    return;
  }

  const dlURL = await getDownloadURL(ref(storage, newAlarm));
  let dlLocation: string | undefined;

  if (Device.brand) {
    const callback = (downloadProgress: any) => {
      const progress =
        downloadProgress.totalBytesWritten /
        downloadProgress.totalBytesExpectedToWrite;

      setDownloadProgress(progress);

      if (progress === 1) {
        setDownloadProgress(undefined);
      }
    };

    const downloadResumable = FileSystem.createDownloadResumable(
      dlURL,
      FileSystem.documentDirectory + newAlarm,
      {},
      callback
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
    } catch (e) {
      console.error(e);
    }
  }

  return { url: dlURL, location: dlLocation };
};
