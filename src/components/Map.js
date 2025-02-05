import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet"; // leaflet import 추가
import "leaflet/dist/leaflet.css";
import { getPlaces } from "../services/firestore";

const center = [37.5665, 126.9780]; // 기본 중심 위치 (서울)

// 커스텀 아이콘 설정
const customIcon = L.icon({
  iconUrl: "/free-icon-location-marker.png", // public 폴더 내 아이콘 경로
  iconSize: [32, 32], // 아이콘 크기 조절
  iconAnchor: [16, 32], // 아이콘의 기준점 (중앙 하단)
  popupAnchor: [0, -32], // 팝업 위치 조정
});

const MapComponent = () => {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    const fetchPlaces = async () => {
      const data = await getPlaces();
      setPlaces(data);
    };
    fetchPlaces();
  }, []);

  return (
    <MapContainer center={center} zoom={12} style={{ width: "100%", height: "500px" }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {places.map((place) => (
        <Marker key={place.id} position={[place.lat, place.lng]} icon={customIcon}>
          <Popup>{place.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapComponent;