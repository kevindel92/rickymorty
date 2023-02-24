import styles from "./SearchBar.module.css";
import { useState } from "react";

export default function SearchBar(props) {
  const { onSearch } = props;
  const [character, setCharacter] = useState("");
  const handleChange = (e) => setCharacter(e.target.value);

  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        type="search"
        value={character}
        placeholder='             id 1 to 825...'
        onChange={handleChange}
      />
      <button className={styles.button} onClick={() => onSearch(character)}>
        Agregar
      </button>
      <button
        className={styles.button}
        onClick={() => onSearch(Math.floor(Math.random() * 826))}
      >
        Random
      </button>
      <button className={styles.button}  onClick={() => window.location.reload()}>
        Logout
      </button>
    </div>
  );
}
