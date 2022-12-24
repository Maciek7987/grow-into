import { useEffect, useState } from "react";
import { useCart } from "react-use-cart";
import { setCookie } from "cookies-next";
import { useMargin } from "../hooks/useMargin";

import Link from "next/link";
import styles from "../styles/cart.module.scss";

export default function cart({ product }) {
  //cart
  const { isEmpty, addItem, updateItemQuantity, removeItem, items } = useCart();
  const [allItems, setallItems] = useState([{}]);
  useEffect(() => {
    setallItems(JSON.parse(JSON.stringify(items)));
    setCookie("emptyCart", isEmpty);
  }, [items]);

  const item = allItems[0];

  //margin
  const marginValueObject = {
    //margin for two-, three-, and four-digit numbers
    mobile: [],
    tablet: ["36px", "21px", "7px"],
    desktop: ["65px", "48px", "32px"],
  };
  let margin = useMargin(item, marginValueObject);

  return (
    <section className={styles.cart}>
      <div className={styles.wrapper}>
        <div className={styles.top}>
          <h2 className={styles.top__title}>
            <span className="bigLetter">Cart</span>
          </h2>
        </div>
        <div className={styles.order}>
          <div className={`${styles.order__product} ${styles.order__element}`}>
            <p className={styles.name}>Product</p>
            <div className={styles.item}>
              <div className={styles.wrap}>
                <button
                  disabled={item ? false : true}
                  onClick={() => (item ? removeItem(item.id) : null)}
                  className={styles.remove}
                >
                  <svg
                    className={styles.svg}
                    viewBox="0 0 13 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line
                      className={styles.svg__line}
                      y1="-0.75"
                      x2="16.4886"
                      y2="-0.75"
                      transform="matrix(-0.687934 0.725773 -0.687934 -0.725774 11.843 0.233185)"
                      stroke="#E3A3A3"
                      strokeWidth="1.5"
                    />
                    <line
                      className={styles.svg__line}
                      y1="-0.75"
                      x2="16.4886"
                      y2="-0.75"
                      transform="matrix(-0.687934 -0.725774 0.687934 -0.725773 12.5 12.2332)"
                      stroke="#E3A3A3"
                      strokeWidth="1.5"
                    />
                  </svg>
                </button>
              </div>
              <h2 className={styles.product}>
                <span className="bigLetter">Grow</span>{" "}
                <span className="bigLetter">Into</span>{" "}
                <span className="bigLetter">Journal</span>
              </h2>
            </div>
          </div>
          <div className={`${styles.order__price} ${styles.order__element}`}>
            <p className={styles.name}>Price</p>
            <h2 className={styles.price}>45,00 USD</h2>
          </div>
          <div className={`${styles.order__quantity} ${styles.order__element}`}>
            <p className={styles.name}>Quantity</p>
            <div className={styles.wrap}>
              <button
                disabled={item ? false : true}
                onClick={() => {
                  item ? updateItemQuantity(item.id, item.quantity - 1) : null;
                }}
                className={styles.subtract}
              />
              <h2 className={styles.quantity}>{item ? item.quantity : 0}</h2>
              <button
                disabled={item?.quantity === 100 ? true : false}
                onClick={() => {
                  !item
                    ? addItem(product, 1)
                    : updateItemQuantity(item.id, item.quantity + 1);
                }}
                className={styles.add}
              />
            </div>
          </div>
          <div className={`${styles.order__total} ${styles.order__element}`}>
            <p className={styles.name}>Total</p>
            <h2 className={styles.total} style={{ marginRight: margin }}>
              {item ? item.itemTotal : "00"},00 USD
            </h2>
          </div>
        </div>

        <div className={styles.summary}>
          <p className={styles.summary__title}>Order summary</p>
          <div className={styles.wrap}>
            <div className={styles.summary__subtotal}>
              <p className={styles.name}>Subtotal</p>
              <p className={styles.subtotal}>
                {item ? item.itemTotal : "00"},00 USD
              </p>
            </div>
            <div className={styles.summary__shipping}>
              <p className={styles.name}>Shipping</p>
              <p className={styles.shipping}>Standard: 5 USD</p>
            </div>
          </div>
          <div className={styles.summary__total}>
            <p className={styles.name}>Total</p>
            <h2 className={styles.total}>
              {item ? item.itemTotal + 5 : "00"},00 USD
            </h2>
          </div>
          <Link
            tabIndex={item ? 0 : -1}
            disabled={item ? false : true}
            href={item ? "/order" : "#"}
            className={`${styles.summary__btn} btn`}
          >
            <span className={`${styles.text} text`}>Checkout</span>
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
      </div>
    </section>
  );
}
