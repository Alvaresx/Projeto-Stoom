import styles from "./style.module.css";
import { FaPhone, FaCoins } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className={styles.navbarContainer}>
      <div className={styles.navbarItem}>
        <div className={styles.navbarPhoneIcon}>
          <FaPhone />
        </div>
        <div>
          <p>Peça agora</p>
          <span>(12) 3456-7890</span>
        </div>
      </div>
      <a href="/#header" className={styles.navbarItemMenu}>
        Home
      </a>
      <a href="/#pizza-list" className={styles.navbarItemMenu}>
        Produtos
      </a>
      <a href="/#footer" className={styles.navbarItemMenu}>
        Onde Estamos
      </a>
      <div className={styles.navbarItem}>
        <div className={styles.navbarPhoneIcon}>
          <FaCoins />
        </div>
        <div>
          <p>Stoom Points</p>
          <span>0 pontos</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
