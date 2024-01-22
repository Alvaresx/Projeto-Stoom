import { Link } from "react-router-dom";
import styles from "../style.module.css";
import { GiFullPizza } from "react-icons/gi";
import { useEffect, useState } from "react";
import axios from "axios";

type PizzaSizes = {
  id: number;
  size: number;
};

const OrderStep01 = () => {
  const [selectedPizzaSize, setSelectedPizzaSize] = useState<number>(0);
  const [pizzaSizes, setPizzaSizes] = useState<Array<PizzaSizes>>([]);

  const getIconColor = (size: number) =>
    selectedPizzaSize === size ? "#d86d52" : "currentColor";

  const getTagClassName = (size: number) => {
    if (size === 30) return styles.orderStepPizzaTagOne;
    if (size === 35) return styles.orderStepPizzaTagTwo;
    if (size === 40) return styles.orderStepPizzaTagThree;
  };

  const selectPizzaSize = (size: number) => {
    setSelectedPizzaSize(size);
    const orderInfo = JSON.parse(localStorage.getItem("orderInfo") || "");
    const newInfo = {
      ...orderInfo,
      size,
    };
    localStorage.setItem("orderInfo", JSON.stringify(newInfo));
  };

  useEffect(() => {
    axios
      .get("http://localhost:3031/pizzaSizes")
      .then((res) => setPizzaSizes(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className={styles.orderStepOptions}>
      <p>Escolha o tamanho da sua pizza:</p>
      <div className={styles.orderStepPizzaOptions}>
        {pizzaSizes.map((item) => (
          <div key={item.id}>
            <GiFullPizza
              size={item.size}
              onClick={() => selectPizzaSize(item.size)}
              fill={getIconColor(item.size)}
            />
            <span
              className={getTagClassName(item.size)}
            >{`${item.size}cm`}</span>
          </div>
        ))}
      </div>

      <div className={styles.orderStepButtons}>
        <Link to="/order/dough">Avançar</Link>
      </div>
    </div>
  );
};

export default OrderStep01;
