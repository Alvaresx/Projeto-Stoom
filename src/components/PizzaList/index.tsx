import { PizzaFlavors, pizzasFlavors } from "./definitions";
import styles from "./style.module.css";

const PizzaList = () => {
  const getPizzaInfo = (item: PizzaFlavors) => {
    const { name, description, price, image } = item;
    const pizzaInfo: PizzaFlavors = { name, description, price, image };
    localStorage.setItem("pizzaInfo", JSON.stringify(pizzaInfo));
    window.location.assign("/order");
  };

  return (
    <div id="pizza-list" className={styles.pizzaListContainer}>
      <h1 className={styles.pizzaListTitle}>A Melhor Pizza da Cidade</h1>
      <p className={styles.pizzaListSubtitle}>
        Saboreie a excelência em cada pedaço – a melhor pizza da cidade está
        aqui!
      </p>
      <div className={styles.pizzaListCardContainer}>
        {pizzasFlavors.map((item) => (
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
