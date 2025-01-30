import { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = async () => {
  const response = await fetch("/firebase-config.json"); // public 폴더의 파일을 읽어옴
  const config = await response.json(); // JSON으로 파싱
  return config;
};

const FirebaseInit = () => {
  const [app, setApp] = useState(null);
  
  useEffect(() => {
    const setupFirebase = async () => {
      const config = await firebaseConfig();
      const app = initializeApp(config); // Firebase 초기화
      setApp(app);
    };
    
    setupFirebase();
  }, []);

  return <div>{app ? "Firebase가 초기화되었습니다!" : "Firebase 초기화 중..."}</div>;
};

export default FirebaseInit;