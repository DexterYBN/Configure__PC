import React from "react";
import styles from "./Map.module.css";
import Medina from "../../../images/Medina.jpg"

const Map = () => {
  return (
    <main>
        <div className={styles.image}>
            <h2>Наш офис</h2>
            <img src={Medina} alt="Medina" />
        </div>
      <div className={styles.map}>
      <h2>Наш офис на карте</h2>
        <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3Aa0b4a8254ab883b96d4a6922697e2c6e9a3998c01fd95746e338dfe7ff877d0b&amp;source=constructor"
          width="100%"
          height="385"
          property="intoned"
          frameBorder="0"
          title="1"
        ></iframe>
      </div>
    </main>
  );
};

export default Map;
