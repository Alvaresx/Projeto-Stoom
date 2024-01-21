import { useEffect, useState } from "react";
import { PizzaFlavors } from "./definitions";
import styles from "./style.module.css";
import axios from "axios";

const PizzaList = () => {
  const [pizzaFlavors, setPizzaFlavors] = useState<Array<PizzaFlavors>>([]);

  const getPizzaInfo = (item: PizzaFlavors) => {
    const { name, description, price, image } = item;
    const pizzaInfo: PizzaFlavors = { name, description, price, image };
    localStorage.setItem("selectedPizzaInfo", JSON.stringify(pizzaInfo));
    window.location.assign("/order/size");
  };

  useEffect(() => {
    axios
      .get("http://localhost:3031/pizzaFlavors")
      .then((res) => setPizzaFlavors(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div id="pizza-list" className={styles.pizzaListContainer}>
      <h1 className={styles.pizzaListTitle}>A Melhor Pizza da Cidade</h1>
      <p className={styles.pizzaListSubtitle}>
        Saboreie a excelência em cada pedaço – a melhor pizza da cidade está
        aqui!
      </p>
      <div className={styles.pizzaListCardContainer}>
        {pizzaFlavors.map((item) => (
          <div
            key={item.name}
            className={styles.pizzaListCard}
            onClick={() => getPizzaInfo(item)}
          >
            <img src={item.image} />
            <h2>{item.name}</h2>
            <span>{item.price}</span>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PizzaList;
