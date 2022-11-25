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

export const downloadFile = async (alarm?: string) => {
  if (!alarm) {
    console.log("No alarm selected");
    return;
  }

  const dlURL = await getDownloadURL(ref(storage, alarm));

  return dlURL;
};
