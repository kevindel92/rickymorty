import "./App.css";
import Cards from "./components/card/Cards";
import Nav from "./components/nav/Nav.jsx";
import Favorites from './components/favorites/Favorites'
import { useState, useEffect } from "react";
import {
  Routes,
  Route,
  useLocation,
  useNavigate,
} from "react-router-dom";
import About from "./components/about/About.jsx";
import Detail from "./components/details/Detail.jsx";
import Error from "./components/error/Error";
import Form from "./components/form/Form.jsx";

function App() {

  const navigate = useNavigate();
  const [characters, setCharacters] = useState([]);
  const location = useLocation();
  const [access, setAccess] = useState(false);
  const username = "kevin@hotmail.com";
  const password = "a12345";
  const login = (userData) => {
    if (userData.password === password && userData.username === username) {
      setAccess(true);
      navigate("/home");
    } else {
      alert('Correo electronico o contraseña incorrecto')
    }
  };

  useEffect(() => {
    !access && navigate("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [access]);

  const onSearch = (character) => {
     // Convertimos a un número entero
     const characterId = parseInt(character, 10);
     //  existe en el array de personajes
     if (characters.some((c) => c.id === characterId)) {
       // mensaje de error
       window.alert("Este personaje ya ha sido añadido");
     } else {
    fetch(`http://localhost:3001/rickandmorty/character/${character}`)
    .then((response) => response.json())
    .then((data) => {
        if (data) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      });
    }
  };

  const onClose = (id) => {
    setCharacters(characters.filter((c) => c.id !== id));
  };

  return (
    <div className="App" style={{ padding: "25px" }}>
      <div>
        {location.pathname === "/"  ? (
          ""
        ) : !/detail/.test(location.pathname)? (
          <Nav onSearch={onSearch} />
        ) : (
          ""
        )}
      </div>
      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:detailId" element={<Detail />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
