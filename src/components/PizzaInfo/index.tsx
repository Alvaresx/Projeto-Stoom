import { useState } from "react";
import styles from "./style.module.css";
import { PizzaFlavors } from "../PizzaList/definitions";

const PizzaInfo = () => {
  const [pizzaInfo] = useState<PizzaFlavors>(
    JSON.parse(localStorage.getItem("selectedPizzaInfo") || "")
  );

  return (
    <>
      <div className={styles.pizzaInfoContainer}>
        <h1>{pizzaInfo.name}</h1>
        <h2>{pizzaInfo.price}</h2>
        <p>{pizzaInfo.description}</p>
        <hr />
      </div>
    </>
  );
};

export default PizzaInfo;
