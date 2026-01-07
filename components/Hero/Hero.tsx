import css from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={css.hero}>
      <div className={css.heroContainer}>
        <div className={css.heroBox}>
          <h1 className={css.heroTitle}>Campers of your dreams</h1>
          <p className={css.heroText}>
            You can find everything you want in our catalog
          </p>
        </div>
        <button className={css.heroBtn}>View Now</button>
      </div>
    </section>
  );
};

export default Hero;
