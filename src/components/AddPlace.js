import { useState } from "react";
import { addPlace } from "../services/firestore";

const AddPlace = () => {
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !lat || !lng) return alert("모든 필드를 입력하세요!");
    await addPlace("sample", name, parseFloat(lat), parseFloat(lng));
    alert("✅ 장소가 추가되었습니다!");
    setName(""); 
    setLat(""); 
    setLng("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="장소 이름" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="number" placeholder="위도" value={lat} onChange={(e) => setLat(e.target.value)} />
      <input type="number" placeholder="경도" value={lng} onChange={(e) => setLng(e.target.value)} />
      <button type="submit">추가</button>
    </form>
  );
};

export default AddPlace;
