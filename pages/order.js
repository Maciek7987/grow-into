import { useEffect, useState } from "react";
import styles from "../styles/order.module.scss";
import Form from "../components/Form";

export default function order() {

  const [item, setItem] = useState({});
  useEffect(() => {
    setItem(JSON.parse(window.localStorage.getItem("react-use-cart")).items[0]);
  },[]);

  return (
    <section className={styles.order}>
      <div className={styles.wrapper}>
        <div className={styles.top}>
          <h2 className={styles.top__title}>
            <span className="bigLetter">Order</span>
          </h2>
        </div>
        <Form item={item} />
      </div>
    </section>
  );
}
