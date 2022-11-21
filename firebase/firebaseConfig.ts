import { initializeApp } from "firebase/app";
import { getStorage, ref } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBCll1lAwUrh5QI73SJnSYiWKlutxLjgyI",
  authDomain: "alarm-sharer.firebaseapp.com",
  projectId: "alarm-sharer",
  storageBucket: "alarm-sharer.appspot.com",
  messagingSenderId: "653140380347",
  appId: "1:653140380347:web:824c57b551cd2b7600379e",
  measurementId: "G-JSP5CF0D6M",
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };
