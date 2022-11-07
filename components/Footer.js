import Image from "next/image";

import styles from "../styles/Footer.module.scss";
import logo from "../images/footer/logo.svg";

const Item = ({ href, textContent }) => {
  return (
    <li className={styles.list__item}>
      <a href={href} className={styles.link}>
        {textContent}
        <div className={styles.line} />
      </a>
    </li>
  );
};

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <Image className={styles.footer__img} src={logo} alt="logo" />
        <ul className={styles.list}>
          <Item href="#" textContent="Returns" />
          <Item href="#" textContent="Shipment" />
          <Item href="#" textContent="Privacy & Policy" />
        </ul>
      </div>
    </footer>
  );
}
