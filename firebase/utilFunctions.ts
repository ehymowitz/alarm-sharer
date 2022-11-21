import { listAll, ref } from "firebase/storage";
import { storage } from "./firebaseConfig";

export const listFiles = async () => {
  const listRef = ref(storage);

  const files: string[] = [];

  await listAll(listRef)
    .then((res) => {
      res.items.forEach((itemRef) => {
        console.log(itemRef);
        files.push(itemRef.name);
      });
    })
    .catch((error) => {
      // Uh-oh, an error occurred!
      console.log(error);
    });

  return files;
};
