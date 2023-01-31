import React from "react";
import styles from "./AboutUs.module.css";
const Contacts = () => {
  return (
    <div className={styles.contacts}>
      <div className={styles.map}>
        <h2 className={styles.mapTitle}>Наш офис</h2>
        <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3Aa0b4a8254ab883b96d4a6922697e2c6e9a3998c01fd95746e338dfe7ff877d0b&amp;source=constructor"
          width="100%"
          height="385"
          property="intoned"
          frameborder="0"
          title="myFrame"
        ></iframe>
      </div>
    </div>
  );
};

export default Contacts;
