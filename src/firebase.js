import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = async () => {
  const response = await fetch("/firebase-config.json");
  const config = await response.json();
  return config;
};

// Firebase 초기화
let app;
let db;

const setupFirebase = async () => {
  if (!app) {
    const config = await firebaseConfig();
    app = initializeApp(config);
    db = getFirestore(app);
  }
};

await setupFirebase(); // Firebase 설정 완료

export { app, db };