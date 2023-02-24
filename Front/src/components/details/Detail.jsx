import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./Detail.module.css";

export default function Detail() {
  const { detailId } = useParams();
  const [character, setCharacter] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`http://localhost:3001/rickandmorty/detail/${detailId}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter(char);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    return setCharacter({});
  }, [detailId]);

  return (
    <>
      <button className={styles.button} onClick={() => navigate("/home")}>
        Home
      </button>
      {character ? (
        <div className={styles.container}>
          <div>
            <h2>Name: {character.name} </h2>
            <h3>Id: {character.id}</h3>
            <h3>Status: {character.status}</h3>
            <h3>Specie: {character.species}</h3>
            <h3>Gender: {character.gender}</h3>
            <h3>Origin: {character.origin?.name}</h3>
            {/* <h3>Location: {character.location?.name}</h3> */}
          </div>
          <div>
            <img src={character.image} alt={character.name} className={styles.img} />
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
