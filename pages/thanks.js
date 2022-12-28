import Link from "next/link";
import styles from "../styles/thanks.module.scss";

export default function Thanks() {
  return (
    <section className={styles.thanks}>
      <div className={styles.wrapper}>
        <div className={styles.top}>
          <h1 className={styles.top__title}>
            Thank{" "}
            <span className={`${styles.bigLetter} bigLetter italic`}>You!</span>
          </h1>
          <p className={styles.top__description}>
            You are about to grow into yourself.
          </p>
        </div>
        <div className={styles.main}>
          <Link href="/" className={`${styles.main__btn} btn`}>
            <span className={`${styles.text} text`}>Go back to shop</span>
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
