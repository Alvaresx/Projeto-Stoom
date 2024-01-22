import styles from "./style.module.css";
import { PizzaFlavors } from "../PizzaList/definitions";
import { currencyFormatter } from "../../utils/currencyFormatter";
import { getParsedItemLocalStorage } from "../../utils/getParsedItemLocalStorage";

const PizzaInfo = () => {
  const pizzaInfo: PizzaFlavors =
    getParsedItemLocalStorage("selectedPizzaInfo");

  return (
    <>
      <div className={styles.pizzaInfoContainer}>
        <h1>{pizzaInfo.name}</h1>
        <h2>{currencyFormatter(pizzaInfo.price)}</h2>
        <p>{pizzaInfo.description}</p>
        <hr />
      </div>
    </>
  );
};

export default PizzaInfo;
