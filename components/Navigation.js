import { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "../styles/Navigation.module.scss";
import logo from "../images/navigation/logo.svg";
let oldScrollValue = 0;

export default function Navigation() {
  const nav = useRef(null);
  const hiddenMenu = () => {
    if (window.scrollY > oldScrollValue) {
      nav.current.style.transform = "translateY(-100%)";
      nav.current.style.opacity = "0";
    } else {
      nav.current.style.transform = "translateY(0)";
      nav.current.style.opacity = "1";
    }
    oldScrollValue = window.scrollY;
  };
  useEffect(() => {
    window.addEventListener("scroll", hiddenMenu);
  });

  let number = "00,00";
  return (
    <nav ref={nav} className={styles.navigation}>
      <div className={styles.logo}>
        <Image className={styles.logo__img} src={logo} alt="logo" />
      </div>
      <div className={styles.buttonsShop}>
        <a href="#">buy now</a>
        <a href="#">how it works</a>
      </div>
      <div className={styles.basket}>
        <div className={`${styles.basket__img} ${styles.basket__imgFull}`} />
        <div className={styles.basket__price}>{number} USD</div>
      </div>
    </nav>
  );
}
