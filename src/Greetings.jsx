export function Greetings(props) {
  console.log(props);
  /* if (props.age > 100) {
    return <p>Tu es pas tout jeune</p>;
  } else {
    return (
      <ul>
        <li>Hello {props.firstname}</li>
        <li>You are {props.age} years old.</li>
        <li>{props.children}</li>
      </ul>
    );
  } */
  return (
    <ul>
      <li>Hello {props.firstname}</li>
      <li>You are {props.age} years old.</li>
      <li>{props.children}</li>
      <li>{props.isSunny ? <ItsSunny /> : <ItsRainy />}</li>
    </ul>
  );
}

function ItsSunny() {
  return <h1>Il fait beau</h1>;
}

function ItsRainy() {
  return <h1>Il pleut</h1>;
}
