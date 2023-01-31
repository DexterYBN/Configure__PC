import React from "react";
import styles from "./AboutUs.module.css";
const History = () => {
  return (
    <div className={styles.aboutBlock}>
      <div className={styles.title}>
        MATRIX – один из лидеров рынка по сборке персональных компьютеров в России
      </div>
      <p className={styles.description}>
        Наша цель изменить жизнь людей, сделав простым доступ к огромному
        количеству качественных и недорогих компьютеров, предоставляя лучший сервис.
      </p>
      <h3 className={styles.titleHistory}>Наша история</h3>
      <div className={styles.historyBlock}>
        <div className={styles.history1}>
          <h1 className={styles.historyTitle}>2020 г.</h1>
          <p className={styles.historyDescription}>
            Открытие первого магазина в г.Грозный
          </p>
        </div>
        <div className={styles.history1}>
          <h1 className={styles.historyTitle}>2021 г.</h1>
          <p className={styles.historyDescription}>
            Открытие интернет-магазина Matrix
          </p>
        </div>
        <div className={styles.history1}>
          <h1 className={styles.historyTitle}>2022 г.</h1>
          <p className={styles.historyDescription}>
            Открытие магазинов в нескольких городах России и выход на рынок
            Беркат
          </p>
        </div>
      </div>
    </div>
  );
};

export default History;
