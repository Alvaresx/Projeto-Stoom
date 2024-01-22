import { useEffect, useState } from "react";
import styles from "./style.module.css";
import axios from "axios";
import {
  OrderInfoMock,
  PizzaRecommendationMock,
  SelectedPizzaInfoMock,
} from "./definitions";
import { BiSolidBadge } from "react-icons/bi";
import { Link } from "react-router-dom";
import { currencyFormatter } from "../../utils/currencyFormatter";
import { getParsedItemLocalStorage } from "../../utils/getParsedItemLocalStorage";

type PizzaRecommendation = {
  image: string;
  name: string;
  price: number;
  description: string;
  note: string;
  points: number;
};

const ReviewOrderView = () => {
  const [pizzaRecommendation, setPizzaRecommendation] =
    useState<PizzaRecommendation>(PizzaRecommendationMock);

  const [orderInfo, setOrderInfo] = useState(OrderInfoMock);
  const [selectedPizzaInfo, setSelectedPizzaInfo] = useState(
    SelectedPizzaInfoMock
  );

  const [isRecommendationSelected, setIsRecommendationSelected] =
    useState(false);

  const finalizeOrder = () => {
    const stoomPoints = getParsedItemLocalStorage("stoomPoints");
    const points = {
      points: isRecommendationSelected
        ? (stoomPoints?.points || 0) + 50
        : stoomPoints.points,
    };
    localStorage.setItem("stoomPoints", JSON.stringify(points));
  };

  useEffect(() => {
    axios
      .get("http://localhost:3031/pizzaRecommendation")
      .then((res) => setPizzaRecommendation(res.data))
      .catch((err) => console.log(err));

    const parsedOrderInfo = getParsedItemLocalStorage("orderInfo");
    setOrderInfo(parsedOrderInfo);

    const parsedSelectedPizzaInfo =
      getParsedItemLocalStorage("selectedPizzaInfo");

    setSelectedPizzaInfo(parsedSelectedPizzaInfo);
  }, []);
  return (
    <div className={styles.reviewOrderContainer}>
      <h1>Quase pronto! Vamos revisar?</h1>
      <div className={styles.reviewOrderCardsContainer}>
        <div className={styles.reviewOrderCardInfo}>
          <div className={styles.reviewOrderCardInfoTitle}>Suas escolhas:</div>
          <p>
            <span>Sabor da pizza:</span> {orderInfo.flavor}
          </p>
          <p>
            <span>Tipo de massa:</span> {orderInfo.dough}
          </p>
          <p>
            <span>Quantidade:</span> {orderInfo.quantity}
          </p>
          <p>
            <span>Pizza do dia adicionada:</span>{" "}
            {isRecommendationSelected ? "Sim" : "Não"}
          </p>
          <p>
            <span>Valor total: </span>
            {currencyFormatter(
              selectedPizzaInfo.price * orderInfo.quantity +
                (isRecommendationSelected ? pizzaRecommendation.price : 0)
            )}
          </p>
        </div>

        <div className={styles.reviewOrderCardRecommendation}>
          <BiSolidBadge color="green" />
          <span
            className={styles.reviewOrderCardPoints}
          >{`${pizzaRecommendation.points} pontos`}</span>
          <div className={styles.reviewOrderCardTitle}>Pizza do Dia</div>

          <img src={pizzaRecommendation.image} />

          <div>
            <h2>{pizzaRecommendation.name}</h2>
            <p>{pizzaRecommendation.description}</p>
            <p>{pizzaRecommendation.note}</p>
            <span>{currencyFormatter(pizzaRecommendation.price)}</span>
            <button
              className={
                isRecommendationSelected
                  ? styles.reviewOrderButtonRed
                  : styles.reviewOrderButtonGreen
              }
              type="button"
              onClick={() =>
                setIsRecommendationSelected((currentValue) => !currentValue)
              }
            >
              {isRecommendationSelected ? "Deixa pra lá!" : "Eu quero!"}
            </button>
          </div>
        </div>
      </div>
      <div className={styles.reviewOrderButtons}>
        <Link to="/order/quantity">Voltar</Link>
        <Link to="/order/conclusion" onClick={() => finalizeOrder()}>
          Finalizar
        </Link>
      </div>
    </div>
  );
};

export default ReviewOrderView;
