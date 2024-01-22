import styles from "../style.module.css";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { useState } from "react";
import { Link } from "react-router-dom";
import { setOrderInfoLocalStorage } from "../../../utils/setOrderInfoLocalStorage";

const OrderStep03 = () => {
  const [quantity, setQuantity] = useState<number>(1);

  return (
    <div className={styles.orderStepOptions}>
      <p>Escolha a quantidade de pizzas:</p>
      <div className={styles.orderStepPizzaQuantity}>
        <FaMinus
          onClick={() => {
            if (quantity) setQuantity(quantity - 1);
          }}
        />
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(parseInt(e.target.value))}
        />
        <FaPlus onClick={() => setQuantity(quantity + 1)} />
      </div>
      <div className={styles.orderStepButtons}>
        <Link to="/order/dough">Voltar</Link>
        <Link
          to="/order/review"
          onClick={() =>
            setOrderInfoLocalStorage("orderInfo", "quantity", quantity)
          }
        >
          Revisar
        </Link>
      </div>
    </div>
  );
};

export default OrderStep03;
