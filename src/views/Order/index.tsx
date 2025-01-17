import styles from "./style.module.css";
import PizzaInfo from "../../components/PizzaInfo";
import { useState } from "react";
import { PizzaFlavors } from "../../components/PizzaList/definitions";
import { getParsedItemLocalStorage } from "../../utils/getParsedItemLocalStorage";

const OrderView = (props: { children: JSX.Element }) => {
  const [pizzaInfo] = useState<PizzaFlavors>(
    getParsedItemLocalStorage("selectedPizzaInfo")
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
