import { pizzasFlavors } from "./definitions";
import styles from "./style.module.css";

const PizzaList = () => {
  return (
    <div className={styles.pizzaListContainer}>
      <h1 className={styles.pizzaListTitle}>A Melhor Pizza da Cidade</h1>
      <p className={styles.pizzaListSubtitle}>
        Saboreie a excelência em cada pedaço – a melhor pizza da cidade está
        aqui!
      </p>
      <div className={styles.pizzaListCardContainer}>
        {pizzasFlavors.map((item) => (
          <div className={styles.pizzaListCard}>
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
