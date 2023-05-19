import React, { useState, useEffect } from 'react';
import GameSection from './components/GameSection';
import axios from "axios";
import './App.css';
function App() {
  const [gameData, setGameData] = useState(undefined);
  useEffect(() => {
    if (!gameData) {
      axios.get('http://localhost:9000/games')
        .then(data => {
          setGameData(data);
          console.log(data);
        })
        .catch(function (error) {
          console.log(error);
        })
    }
  }, []);
  return (
    <div>
      <GameSection gameData ={gameData} />
    </div>
  );
}

export default App;
