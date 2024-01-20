import styles from "./style.module.css";
import pizza from "../../img/pizza05.jpg";

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <img src={pizza} />
      <h1 className={styles.headerTitle}>
        Onde a arte de fazer a melhor <span>pizza</span> é elevada a um nível
        irresistível!
      </h1>
    </div>
  );
};

export default Header;
