export function Car(props) {
  //   return <p className="box box2">Je suis une voiture.</p>;
  return (
    <div>
      Je suis {"<Car/>"}
      <button
        onClick={() => {
          props.onCarClick(2);
        }}
      >
        {" "}
        Click !
      </button>
    </div>
  );
}
