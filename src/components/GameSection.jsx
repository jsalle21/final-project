import React from "react";
import Card from "./Card";
import Navbar from "./Navbar";

const GameSection = ({ gameData }) => {
  return (
   <div>
   < Navbar />
   <br></br>
   <h1>Welcome to EXStellar, your one and only stop for all things gaming related!</h1>
      <Card image="https://cdn.cloudflare.steamstatic.com/steam/apps/1174180/header.jpg?t=1671485009"label="Red Dead Redemption 2" />
      <Card image ="https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000053336/e933b48650b33b355e9cf2583da5c94b77180e40fb02d050041083dd62f4df39"label="Xenoblade Chronicle 3" />
      <Card image="https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/en_US/games/switch/o/omori-switch/hero"label="Omori"/>
      <Card image="https://outsidergaming.com/wp-content/uploads/2022/11/Pokemon-Scarlet-Violet-Controls-Tips.jpg"label="Pokemon Violet" />
      <Card image="https://images.nintendolife.com/6f9a011e934f7/fire-emblem-three-houses.large.jpg"label="Fire Emblem: Three Houses"/>
    </div>
  );
};

export default GameSection;
