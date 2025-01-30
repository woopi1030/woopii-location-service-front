import React from 'react';
import './App.css';
import MapComponent from './components/Map';  // MapComponent 경로 수정
import AddPlace from './components/AddPlace';  // AddPlace 경로 수정


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React 샘플 페이지</h1>
        <p>React로 첫 페이지를 만들어 봅시다!</p>
      </header>
      <h1>🗺️ OpenStreetMap 지도</h1>
      <AddPlace />
      <MapComponent />
    </div>
  );
}

export default App;


