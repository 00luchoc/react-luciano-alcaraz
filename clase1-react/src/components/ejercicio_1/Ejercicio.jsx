import { useState } from "react";

export function Ejercicio() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
    console.log(count);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="ejercicio_1">
      <h1>Contador</h1>
      <div className="buttons">
        <button onClick={decrement}>Restar</button>
        <button onClick={increment}>Sumar</button>
      </div>
      {count}
    </div>
  );
}
