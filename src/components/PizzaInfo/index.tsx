import { useState } from "react";
import "./style.module.css";
import { PizzaFlavors } from "../PizzaList/definitions";

const PizzaInfo = () => {
  const [pizzaInfo] = useState<PizzaFlavors>(
    JSON.parse(localStorage.getItem("pizzaInfo") || "")
  );

  return (
    <>
      <h1>{pizzaInfo.name}</h1>
      <h2>{pizzaInfo.price}</h2>
      <p>{pizzaInfo.description}</p>
      <hr />
    </>
  );
};

export default PizzaInfo;
