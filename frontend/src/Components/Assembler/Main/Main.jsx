import React from 'react';
import styles from './Main.module.css'
const Main = () => {
    return (
        <div className={styles.pageBg}>

            <div className={styles.title}>Конфигуратор ПК</div>
            <p className={styles.description}>
                Позволяет собрать компьютер, о котором вы мечтали. 
                Изменить комплектацию представленных на сайте сборок,
                узнать цену онлайн, сравнить характеристики.
                Оформить заказ и получить готовый ПК с абсолютно бесплатной профессиональной сборкой.
                Продвинутый онлайн-сервис для модификации ПК</p>
        </div>

    );
};

export default Main;