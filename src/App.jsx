// import { Greetings } from "./Greetings";
import { AgeCounter } from "./AgeCounter";

export function App() {
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

      <AgeCounter />
    </>
  );
}
