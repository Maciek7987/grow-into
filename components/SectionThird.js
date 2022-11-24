import Image from "next/image";
import styles from "../styles/SectionThird.module.scss";
import book from "../images/sectionThird/Bez nazwy.png";

export default function SectionThird() {
  const scroll = () => {
    document
      .querySelector("#sectionShop")
      .scrollIntoView({ behavior: "smooth", block: "end" });
  };
  return (
    <section className={styles.section}>
      <article className={styles.wrapper}>
        <div className={styles.top}>
          <h1 className={styles.top__title}>
            How does{" "}
            <span className={styles.italic}>
              <span className="bigLetter">Grow</span>{" "}
              <span className="bigLetter"> Into</span>{" "}
            </span>
            <span className="bigLetter letterSpacing">Work?</span>
          </h1>
          <p className={styles.top__description}>
            The Grow Into journal itself is not magic - It just has a little
            magic dust in it. Your actions are what make your self grow.
          </p>
        </div>

        <div className={styles.left}>
          <ul className={styles.left__list}>
            <li className={styles.item}>
              <h2 className={styles.item__subtitle}>01. Be Grateful</h2>
              <p className={styles.item__description}>
                Appreciate what is positive to bring more of it into your life
                and offer peace.
              </p>
            </li>
            <li className={styles.item}>
              <h2 className={styles.item__subtitle}>02. Have a Great Day</h2>
              <p className={styles.item__description}>
                By repeating positive affirmations, you manifest a better
                version of yourself.
              </p>
            </li>
            <li className={styles.item}>
              <h2 className={styles.item__subtitle}>03. Affirm</h2>
              <p className={styles.item__description}>
                Setting up your dayin a hopeful energy moves you closer to your
                better self.
              </p>
            </li>
            <li className={styles.item}>
              <h2 className={styles.item__subtitle}>04. Reflect</h2>
              <p className={styles.item__description}>
                The daily practice can be a meditation, exercise, or instruction
                to make you happier.
              </p>
            </li>
            <li className={styles.item}>
              <h2 className={styles.item__subtitle}>05. Practice</h2>
              <p className={styles.item__description}>
                The daily reflection helps you know yourself through curiosity
                and openness.
              </p>
            </li>
          </ul>
        </div>
        <div className={styles.book}>
          <Image
            className={styles.book__img}
            src={book}
            alt="book grow into journal"
            quality={100}
          />
        </div>
        <div className={styles.bottom}>
          <h1 className={styles.bottom__title}>I want to</h1>
          <button onClick={scroll} className={`${styles.bottom__btn} button`}>
            get started
          </button>
        </div>
      </article>
    </section>
  );
}
