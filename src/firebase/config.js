import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCAorhE-Av5YYw9sHa9TWx9IEG2PeXloLg",
  authDomain: "musicalworld-b8a0f.firebaseapp.com",
  projectId: "musicalworld-b8a0f",
  storageBucket: "musicalworld-b8a0f.appspot.com",
  messagingSenderId: "1044048135796",
  appId: "1:1044048135796:web:52d9a4b2ea7a16067a7321",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const getFirestoreApp = () => {
  return app;
};
