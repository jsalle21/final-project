import React from "react";
const Card = (props) => {
  return (
    <div className="col">
      <div className="card">
        <img src={props.image} className="card-img-top" alt="..."></img>
        <div className="card-body">
          <h5 className="card-title">{props.label}</h5>
          <p className="card-text">
            This is the game's description. To learn more details, hit the button down below:
          </p>
          <a href="/game-data" className="btn btn-light">
            Learn more
          </a>
        </div>
      </div>
    </div>
  );
};
export default Card;
