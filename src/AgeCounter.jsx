export function AgeCounter() {
  let age = 30;

  function increaseAge() {
    age++;
  }

  return (
    <>
      <button onClick={increaseAge}>Increase age</button>
      Your are {age} years old.
    </>
  );
}
