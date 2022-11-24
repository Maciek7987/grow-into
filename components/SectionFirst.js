import styles from "../styles/SectionFirst.module.scss";

export default function SectionFirst() {
  return (
    <section className={styles.section}>
      <article className={styles.wrapper}>
        <div className={styles.top}>
          <h1 className={styles.top__title}>
            Feel happier because, you are growing into
            <span className="italic"> yourself</span>
          </h1>
        </div>
        <div className={styles.main}>
          <div className={styles.main__logo} />
          <h2 className={styles.main__subtitle}>
            Finding a balance of <span className="italic">who you are</span> and
            what you want for your life brings better things into your life and
            <span className="italic"> makes you happier</span>.
          </h2>
          <p className={styles.main__description}>
            The Grow Into journal creates direction for your individual journey
            and inspires genuine joy.
          </p>
        </div>
      </article>
    </section>
  );
}
