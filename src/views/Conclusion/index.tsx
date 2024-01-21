import { RiVerifiedBadgeFill } from "react-icons/ri";
import styles from "./style.module.css";

const ConclusionView = () => {
  return (
    <div className={styles.conclusionViewContainer}>
      <RiVerifiedBadgeFill color="green" />
      <p>
        Parabéns! Seu pedido de pizza foi concluído com sucesso. Agora é só
        aguardar e aproveitar o sabor incrível que em breve estará a caminho!
      </p>
      <div className={styles.conclusionViewButtons}>
        <button type="button">Voltar para a home</button>
        <button type="button">Fazer novo pedido</button>
      </div>
    </div>
  );
};

export default ConclusionView;
