import styles from "../style.module.css";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { useState } from "react";
import { Link } from "react-router-dom";

const OrderStep03 = () => {
  const [pizzaQuantity, setPizzaQuantity] = useState<number>(0);

  return (
    <div className={styles.orderStepOptions}>
      <p>Escolha a quantidade de pizzas:</p>
      <div className={styles.orderStepPizzaQuantity}>
        <FaMinus
          onClick={() => {
            if (pizzaQuantity) setPizzaQuantity(pizzaQuantity - 1);
          }}
        />
        <input
          type="number"
          value={pizzaQuantity}
          onChange={(e) => setPizzaQuantity(parseInt(e.target.value))}
        />
        <FaPlus onClick={() => setPizzaQuantity(pizzaQuantity + 1)} />
      </div>
      <div className={styles.orderStepButtons}>
        <Link to="/order/dough">Voltar</Link>
        <Link to="/order/conclusion">Finalizar</Link>
      </div>
    </div>
  );
};

export default OrderStep03;
