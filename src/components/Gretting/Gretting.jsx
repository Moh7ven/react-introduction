import s from "./style.module.css";

export function Greeting(params) {
  return <p className={`${s.box} ${s.box2}`}>Salutations</p>;
}
