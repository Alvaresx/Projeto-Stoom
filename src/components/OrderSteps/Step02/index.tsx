import { Link } from "react-router-dom";
import styles from "../style.module.css";
import { IoPizza } from "react-icons/io5";
import { useEffect, useState } from "react";
import axios from "axios";

type PizzaDoughs = {
  id: string;
  dough: string;
};

const OrderStep02 = () => {
  const [selectedPizzaDough, setSelectedPizzaDough] = useState<string>("");
  const [pizzaDoughs, setPizzaDoughs] = useState<Array<PizzaDoughs>>([]);

  const getIconColor = (dough: string) =>
    selectedPizzaDough === dough ? "#d86d52" : "currentColor";

  const getTagClassName = (dough: string) => {
    if (dough === "Fina") return styles.orderStepPizzaTagOne;
    if (dough === "Grossa") return styles.orderStepPizzaTagTwo;
  };

  const selectPizzaDough = (dough: string) => {
    setSelectedPizzaDough(dough);
    const orderInfo = {
      dough,
    };
    localStorage.setItem("orderInfo", JSON.stringify(orderInfo));
  };

  useEffect(() => {
    axios
      .get("http://localhost:3031/pizzaDoughs")
      .then((res) => setPizzaDoughs(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className={styles.orderStepOptions}>
      <p>Escolha o tipo de massa:</p>
      <div className={styles.orderStepPizzaOptions}>
        {pizzaDoughs.map((item) => (
          <>
            <IoPizza
              size={30}
              onClick={() => selectPizzaDough(item.dough)}
              fill={getIconColor(item.dough)}
              stroke={getIconColor(item.dough)}
            />
            <span className={getTagClassName(item.dough)}>{item.dough}</span>
          </>
        ))}
      </div>
      <div className={styles.orderStepButtons}>
        <Link to="/order/size">Voltar</Link>
        <Link to="/order/quantity">Avançar</Link>
      </div>
    </div>
  );
};

export default OrderStep02;
