import React from "react";
import styles from "./AboutUs.module.css";
import History from "./History";

const AboutUs = () => {
  return (
    <div className={styles.about}>
      <History/>
    </div>
  );
};

export default AboutUs;
