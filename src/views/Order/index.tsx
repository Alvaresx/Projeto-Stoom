import styles from "./style.module.css";
import PizzaInfo from "../../components/PizzaInfo";
import { useState } from "react";
import { PizzaFlavors } from "../../components/PizzaList/definitions";

const OrderView = (props: { children: JSX.Element }) => {
  const [pizzaInfo] = useState<PizzaFlavors>(
    JSON.parse(localStorage.getItem("selectedPizzaInfo") || "")
  );

  return (
    <div className={styles.orderStepContainer}>
      <img src={pizzaInfo.image} />
      <div className={styles.orderStepInfoBox}>
        <PizzaInfo />
        {props.children}
      </div>
    </div>
  );
};

export default OrderView;
