import React from "react";
import styles from "./Footer.module.css";
import tg from "../../images/icons/tg.png";
import inst from "../../images/icons/instagram.png";
import twitter from "../../images/icons/twitter.png";
import yt from "../../images/icons/youtube.png";
import git from "../../images/icons/git.png";
import { Link } from "react-router-dom";
import Map from "./MapPage/Map";

const Footer = () => {
  const handleTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <footer>
      <div className={styles.mainContainer}>
        <div className={styles.container}>
          <div className={styles.wrapper_1}>
            <h4 className={styles.h4}>Оставайтесь на связи</h4>
            <h5>
              <Link onClick={handleTop} to="/map/" element={<Map />}>
                г. Грозный, улица Трошева 7, ТД «Медина», 3 этаж, 1 кабинет
              </Link>{" "}
            </h5>
            <br />
            <p>Обработка и прием заказов по телефону:</p>
            <br />
            <a href="tel:+88005553535">
              <h2>8 (800) 555 35 35</h2>
            </a>
            <br />
            <p>
              Пн-Пт: 9:00 - 18:00 <br />
              Сб-Вс: 10:00 - 22:00
            </p>
          </div>
          <div className={styles.wrapper_2}>
            <div className={styles.company}>
              <h4 className={styles.h4}>Компания</h4>
              <p>О Компании</p>
              <p>Новости</p>
              <p>Партнерам</p>
              <p>Вакансии</p>
              <p>Политика конфиденциальности</p>
              <p>Персональные данные</p>
              <p>Правила пользования сайта</p>
              <p>Сервисные центры</p>
            </div>
            <div className={styles.buyers}>
              <h4 className={styles.h4}>Покупателям</h4>
              <p>Как оформить заказ</p>
              <p>Способы оплаты</p>
              <p>Кредиты</p>
              <p>Доставка</p>
              <p>Статус заказа</p>
              <p>Обмен, возврат, гарантия</p>
              <p>Бонусная программа</p>
              <p>Помощь</p>
              <p>Обратная связь</p>
            </div>
          </div>
        </div>
        <hr />
        <div className={styles.wrapper_3}>
          <div className={styles.social}>
            <a
              href="https://web.telegram.org/k/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={tg} alt="" />
            </a>
            <a href="http://instagram.com" target="_blank" rel="noreferrer">
              <img src={inst} alt="instagram" />
            </a>
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstle" target="_blank" rel="noreferrer">
              <img src={twitter} alt="twitter" />
            </a>
            <a
              href="https://www.youtube.com/watch?v=hd6LWgsVZ7U&ab_channel=WeldonRiddock"
              target="_blank"
              rel="noreferrer"
            >
              <img src={yt} alt="youtube" />
            </a>
            <a
              href="http://github.com/RashidCHAB"
              target="_blank"
              rel="noreferrer"
            >
              <img src={git} alt="git" />
            </a>
          </div>
          <div className={styles.copyright}>
            © 2020-2023 Matrix | All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
