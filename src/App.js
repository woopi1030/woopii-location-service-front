import React from 'react';
import './App.css';
import MapComponent from './components/Map'; 
import AddPlace from './components/AddPlace';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React 샘플 페이지</h1>
        <p>React로 첫 페이지를 만들어 봅시다!</p>
      </header>
      <body className="App-body">
        <h1>🗺️ OpenStreetMap 지도</h1>
        <AddPlace />
        <MapComponent />  
      </body>
    </div>
  );
}

export default App;


