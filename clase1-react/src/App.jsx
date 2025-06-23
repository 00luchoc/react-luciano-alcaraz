import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";


function App() {
 const [count, setCount] = useState(0);


 // el estado tiene tres partes
 const [variable, setVariable] = useState("valor inicial");


 const [personajes, setPersonajes] = useState([]);


 useEffect(() => {
   fetch("https://rickandmortyapi.com/api/character")
     .then((res) => res.json())
     .then((result) => setPersonajes(result.results));
 }, []);


 return (
   <>
     {!personajes ? (
       <div>cargando...</div>
     ) : (
       <ul>
         {personajes.map((personaje) => (
           <li>
             <h3>{personaje.name}</h3>
             <img src={personaje.image} alt="" />
           </li>
         ))}
       </ul>
     )}
   </>
 );
}


export default App;
