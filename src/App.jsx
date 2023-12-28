// import { Greetings } from "./Greetings";
// import { AgeCounter } from "./AgeCounter";
import { Car } from "./components/Car/Car";
import { Greeting } from "./components/Gretting/Gretting";
import "./global.css";

export function App() {
  function hello(number) {
    alert("Hello de <App/>" + number);
  }

  return (
    <>
      {/* <h1>Hello to the React world</h1>
      <Greetings
        firstname={"Rachel"}
        age={10}
        car={{ color: "red", vitesse: 300 }}
        doSomething={function () {
          console.log("Hello");
        }}
        isSunny={true}
      >
        <img src="https://picsum.photos/seed/picsum/200/300" alt="" />
      </Greetings> */}

      {/* <AgeCounter /> */}

      {/* <div
        style={{
          backgroundColor: "red",
          height: 100,
          width: 100,
          border: "3px solid blue",
        }}
      ></div> */}

      {/* <Car />
      <Greeting /> */}

      <div>
        Je suis {"<App/>"}
        <Car onCarClick={hello} />
      </div>
    </>
  );
}
