import { RiVerifiedBadgeFill } from "react-icons/ri";
import styles from "./style.module.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const ConclusionView = () => {
  useEffect(() => {
    localStorage.removeItem("orderInfo");
    localStorage.removeItem("selectedPizzaInfo");
  }, []);

  return (
    <div className={styles.conclusionViewContainer}>
      <RiVerifiedBadgeFill color="green" />
      <p>
        Parabéns! Seu pedido de pizza foi concluído com sucesso. Agora é só
        aguardar e aproveitar o sabor incrível que em breve estará a caminho!
      </p>
      <div className={styles.conclusionViewButton}>
        <Link to="/">Voltar para a home</Link>
      </div>
    </div>
  );
};

export default ConclusionView;
