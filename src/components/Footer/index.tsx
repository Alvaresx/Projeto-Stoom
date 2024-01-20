import styles from "./style.module.css";
import footer from "../../img/footer.jpg";
import { address } from "./definitions";

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerImageBox}>
        <img
          alt="Pessoa ralando um pedaço de queijo em cima de uma pizza"
          src={footer}
          className={styles.footerImage}
        />
      </div>
      <div className={styles.footerTextBox}>
        <div className={styles.footerColumn}>
          <h1 className={styles.footerTitle}>
            Sabores irresistíveis, a cada pedaço uma experiência única na nossa
            pizzaria.
          </h1>
        </div>
        <div className={styles.footerColumn}>
          <h2 className={styles.footerColumnTitle}>Onde Estamos</h2>
          {address.map((item) => (
            <p>
              {item.street}
              <br />
              {item.neighborhood}
              <br />
              {item.phoneNumber}
            </p>
          ))}
        </div>
        <div className={styles.footerColumn}>
          <h2 className={styles.footerColumnTitle}>Horário de Funcionamento</h2>
          <p>
            Terça - Domingo
            <br />
            12h às 23h
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
