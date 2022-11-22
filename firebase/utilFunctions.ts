import { listAll, ref } from "firebase/storage";
import { storage } from "./firebaseConfig";

export const listFiles = async () => {
  const listRef = ref(storage);

  const files: string[] = [];

  await listAll(listRef)
    .then((res) => {
      res.items.forEach((itemRef) => {
        files.push(itemRef.name);
      });
    })
    .catch((error) => {
      console.log(error);
    });

  return files;
};
