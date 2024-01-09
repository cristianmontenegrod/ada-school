import { useState, useEffect } from "react";
import "./App.css";
import { getColor } from "./color-service";

export function App() {
  const [counter, setCounter] = useState(0);
  const [color, setColor] = useState("red");

  const increaseCounter = () => {
    setCounter(counter + 1);
  };

  const decreaseCounter = () => {
    setCounter(counter - 1);
  };

  const resetCounter = () => {
    setCounter(0);
  };

  useEffect(() => {
    // Verificar si el contador es mayor o igual a 3
    if (counter >= 3) {
      // Obtener un nuevo color asincrónicamente
      getColor().then(newColor => {
        // Asignar el nuevo color al estado
        setColor(newColor);
      });
    }
  }, [counter]); // La dependencia es el estado counter

  return (
    <div>
      <h1>Ada School - React Hooks</h1>

      <div>
        <span className={color}>{`Counter:${counter}`}</span>
      </div>

      <button onClick={increaseCounter}>Increase</button>
      <button onClick={decreaseCounter}>Decrease</button>
      <button onClick={resetCounter}>Reset</button>
    </div>
  );
}
