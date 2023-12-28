import { useState } from "react";
import { AgeDisplay } from "./AgeDisplay.jsx";

export function AgeCounter() {
  const [age, setAge] = useState(30);

  function increaseAge() {
    setAge(age + 1);
  }

  return (
    <>
      <button onClick={increaseAge}>Increase age</button>
      <AgeDisplay age={age} />
    </>
  );
}
