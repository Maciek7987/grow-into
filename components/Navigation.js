import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useCart } from "react-use-cart";
import { useMargin } from "../hooks/useMargin";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Navigation.module.scss";
import logo from "../images/navigation/logo.svg";

export default function Navigation({ product, hide }) {
  //redirect and scroll to section How it works
  const router = useRouter();
  const redirectAndScroll = (e) => {
    e.preventDefault();
    let href;
    let behavior;
    if (router.asPath === "/" || router.asPath === "/#") {
      href = "#";
      behavior = "smooth";
    } else {
      href = "/";
      behavior = "auto";
    }
    router.push(href, undefined, { scroll: false }).then(() => {
      document
        .querySelector("#scrollToItWorks")
        .scrollIntoView({ behavior, block: "center" });
    });
  };

  //cart
  let { addItem, items } = useCart();
  const [allItems, setallItems] = useState([{}]);
  useEffect(() => {
    setallItems(JSON.parse(JSON.stringify(items)));
  }, [items]);

  const item = allItems[0];

  //scroll
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const hiddenMenu = () => {
      if (window.scrollY > lastScrollY) setHidden(true);
      else setHidden(false);
      setLastScrollY(window.scrollY);
    };
    window.addEventListener("scroll", hiddenMenu);
    return () => window.removeEventListener("scroll", hiddenMenu);
  }, [lastScrollY]);

  //margin
  const marginValueObject = {
    //margin for two-, three-, and four-digit numbers
    mobile: ["20px", "15px", "10px"],
    tablet: ["37px", "31px", "25px"],
    desktop: ["88px", "81px", "74px"],
  };
  let margin = useMargin(item, marginValueObject);

  return (
    <nav className={`${styles.navigation} ${hide && hidden && styles.hidden}`}>
      <div className={styles.logo}>
        <Link href="/">
          <div className={styles.wrap} />
          <div className={styles.gradient} />
          <Image className={styles.logo__img} src={logo} alt="logo" />
        </Link>
      </div>
      <div className={styles.wrap}>
        <ul className={styles.buttonsShop}>
          <li className={styles.buttonsShop__item}>
            <Link
              onClick={() => (!item ? addItem(product, 1) : null)}
              className={styles.link}
              href="/cart"
            >
              buy now
              <div className={styles.line} />
            </Link>
          </li>
          <li className={styles.buttonsShop__item}>
            <Link
              onClick={(e) => {
                redirectAndScroll(e);
              }}
              className={styles.link}
              href="#"
            >
              how it works
              <div className={styles.line} />
            </Link>
          </li>
        </ul>
        <div className={`${styles.basket}`}>
          <Link href="/cart">
            <div
              className={`${styles.basket__img} ${
                item ? styles.basket__imgFull : ""
              }`}
            />
          </Link>
          <div className={styles.basket__price} style={{ marginRight: margin }}>
            {item ? item.itemTotal : "00"},00 USD
          </div>
        </div>
      </div>
    </nav>
  );
}
