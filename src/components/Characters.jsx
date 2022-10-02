import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchGetCharacters,
  getCharacters,
} from "../redux/slices/characterSlice";
import CharacterCard from "./CharacterCard";

const Characters = () => {
  const dispatch = useDispatch();

  const [search, setSearch] = useState("");

  const { characters, isLoading, isError } = useSelector(getCharacters);
  useEffect(() => {
    dispatch(fetchGetCharacters());
  }, []);
  console.log(characters);
  if (isLoading) return <p>Loading...</p>;
  return (
    <div
      style={{ flexWrap: "wrap" }}
      className="d-flex justify-content-center align-items-center "
    >
      <div className="container">
        <div style={{ marginBottom: "10px" }} className="row ">
          <h1 className="text-align-center align-item-center d-flex justify-content-center ">
            Rick And Morty Characters
          </h1>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-100"
            placeholder="search character"
          />
        </div>
      </div>
      {characters
        .filter((item) => {
          if (search === "") {
            return item;
          } else if (item.name.toLowerCase().includes(search.toLowerCase())) {
            return item;
          }
        })
        .map((character, index) => {
          return (
            <div key={index}>
              <CharacterCard character={character} />
            </div>
          );
        })}
    </div>
  );
};

export default Characters;
