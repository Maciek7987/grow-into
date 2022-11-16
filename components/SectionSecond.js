import Image from "next/image";
import styles from "../styles/SectionSecond.module.scss";
import book from "../images/sectionSecond/Book.png";

export default function SectionSecond() {
  return (
    <section className={styles.section}>
      <article className={styles.wrapper}>
        <div className={styles.top}>
          <h1 className={styles.top__title}>
            Start any day. <span className="italic">Write anytime.</span>
          </h1>
          <p className={styles.top__description}>
            This 90-day journal is set up to last{" "}
            <span className={styles.smallWidth}>
              90 days in total, but it adapts to your habits.
            </span>
          </p>
        </div>
        <div className={styles.book}>
          <Image
            className={styles.book__img}
            src={book}
            alt="open book grow into journal"
            quality={100}
          />
        </div>
        <div className={styles.main}>
          <h2 className={styles.main__subtitle}>
            The beauty of the Grow{" "}
            <span className={styles.smallWidth}>
              Into journal is that it works:
            </span>
          </h2>
          <ul className={styles.main__list}>
            <li className={styles.item}>Every time you use it</li>
            <li className={styles.item}>Whenever you start</li>
            <li className={styles.item}>Without judgment</li>
          </ul>
        </div>
        <div className={styles.bottom}>
          <h1 className={styles.bottom__title}>
            It works in whatever way you need -{" "}
            <span className={styles.opacity}>---</span>
          </h1>
          <button className={`${styles.bottom__btn} button`}>
            find out how
          </button>
        </div>
      </article>
    </section>
  );
}
