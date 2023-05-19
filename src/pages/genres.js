import React, { useState, useEffect } from 'react';
import axios from "axios";

function Genres() {
    const [gameData, setGameData] = useState(undefined);
    useEffect(() => {
      if (!gameData) {
        axios.get('http://localhost:9000/genres')
          .then(data => {
            setGameData(data);
            console.log(data);
          })
          .catch(function (error) {
            console.log(error);
          })
      }
    }, [gameData]);
    return (
      <div>
        <h1>This is the genre page.</h1>
      </div>
    );
  }
  
  export default Genres;