import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";

// Firestore에 장소 추가 함수
export const addPlace = async (name, lat, lng) => {
  try {
    await addDoc(collection(db, "places"), { name, lat, lng });
    console.log("✅ 장소가 Firestore에 추가되었습니다!");
  } catch (error) {
    console.error("❌ Firestore 저장 오류:", error);
  }
};

// Firestore에서 장소 목록 가져오기
export const getPlaces = async () => {
    const querySnapshot = await getDocs(collection(db, "places"));
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  };