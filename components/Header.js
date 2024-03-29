import { useEffect, useState } from "react";
import { useCart } from "react-use-cart";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Header.module.scss";
import book from "../images/header/book1.png";

export default function Header({ product }) {
  // let { addItem } = useCart();
  // const [item, setItem] = useState({});
  // useEffect(() => {
  //   setItem(JSON.parse(window.localStorage.getItem("react-use-cart")).items[0]);
  // }, []);
  const { addItem, items } = useCart();
  const [allItems, setallItems] = useState([{}]);
  useEffect(() => {
    setallItems(JSON.parse(JSON.stringify(items)));
  }, [items]);

  const item = allItems[0];

  return (
    <header className={styles.header}>
      <section className={styles.hero}>
        <div className={styles.left}>
          <h1 className={styles.left__title}>
            Are you ready to{" "}
            <span className={`italic ${styles.italic}`}>
              <span className="bigLetter">Grow</span>{" "}
              <span className="bigLetter">Into</span>{" "}
            </span>{" "}
            your self?
          </h1>
          <p className={styles.left__description}>
            Let the Grow Into journal lead you to your authentic self.
          </p>
          <Link
            href="/cart"
            onClick={() => (!item ? addItem(product, 1) : null)}
            className={`${styles.left__btn} btn`}
          >
            <span className={`${styles.text} text`}>Buy now</span>
            <svg
              className={`${styles.arrow} arrow`}
              viewBox="0 0 8 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className={`${styles.arrow__path} arrow__path`}
                d="M0.999999 11.8755L7 6.37549L1 0.875488"
                stroke="black"
                strokeLinecap="square"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
        <div className={styles.book}>
          <Image
            className={styles.book__img}
            src={book}
            alt="book grow into journal"
            quality={90}
          />
        </div>
      </section>
    </header>
  );
}
