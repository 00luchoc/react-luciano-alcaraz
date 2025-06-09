import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { User } from "./components/User";
import Employees from "./components/employees";
//siempre que el import sea "nombrado" van llaves
//si el import es no nombrado o por default va sin llaves

function App() {
  //el componente es una funcion que devuelve contenido renderizable
  //el componente siempre arranca con mayuscula
  //npm install para instalar dependencias
  //npm run dev para correr el programa
  const [count, setCount] = useState(0);

  return (
    <>
      <User name="Lucho y July" />
      <Employees />
    </>
  );
}

export default App;
