import React, { useState, useEffect } from 'react';

import axios from "axios";

function Storefronts() {
    const [gameData, setGameData] = useState(undefined);
    useEffect(() => {
      if (!gameData) {
        axios.get('http://localhost:9000/storefronts')
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
        <h1>This is the storefronts page.</h1>
      </div>
    );
  }
  
  export default Storefronts;