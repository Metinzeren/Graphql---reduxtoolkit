import React from "react";

const CharacterCard = ({ character }) => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="d-flex">
            <div className="cardDown">
              <img className="w-100" src={character.image} alt="" />
              <p>{character.name}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;
