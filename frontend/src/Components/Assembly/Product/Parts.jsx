import React from "react";
import { useSelector } from "react-redux";
import styles from "./Product.module.css";
const Parts = ({
  processor,
  power,
  compCase,
  ssd,
  motherboard,
  hdd,
  ram,
  graphics,
}) => {
  const accessory = useSelector((state) => state.accessories.acs);
  return (
    <div>
      <div>
        <p className={styles.acsTitle}>Видео-карта:</p>
        {accessory.map((item) => {
          if (item._id === graphics) {
            return (
              <div key={item._id} className={styles.acsBlockN}>
                {" "}
                <img
                  className={styles.posterAcs}
                  src={`/assets/images/${item.category.image_white}`}
                  alt=""
                />
                <p className={styles.acsName}>{item.name}</p>
              </div>
            );
          }
          return null;
        })}
      </div>
      <p className={styles.acsTitle}>Процессор:</p>
      {accessory.map((item) => {
        if (item._id === processor) {
          return (
            <div key={item._id} className={styles.acsBlockN}>
              {" "}
              <img
                className={styles.posterAcs}
                src={`/assets/images/${item.category.image_white}`}
                alt=""
              />
              <p className={styles.acsName}>{item.name}</p>
            </div>
          );
        }
        return null;
      })}
      <p className={styles.acsTitle}>Оперативная память:</p>
      {accessory.map((item) => {
        if (item._id === ram) {
          return (
            <div key={item._id} className={styles.acsBlockN}>
              {" "}
              <img
                className={styles.posterAcs}
                src={`/assets/images/${item.category.image_white}`}
                alt=""
              />
              <p className={styles.acsName}>{item.name}</p>
            </div>
          );
        }
        return null;
      })}
      <p className={styles.acsTitle}>Материнская плата:</p>
      {accessory.map((item) => {
        if (item._id === motherboard) {
          return (
            <div key={item._id} className={styles.acsBlockN}>
              {" "}
              <img
                className={styles.posterAcs}
                src={`/assets/images/${item.category.image_white}`}
                alt=""
              />
              <p className={styles.acsName}>{item.name}</p>
            </div>
          );
        }
        return null;
      })}
      {ssd ? <p className={styles.acsTitle}>SSD:</p> : null}
      {ssd
        ? accessory.map((item) => {
            if (item._id === ssd) {
              return (
                <div key={item._id} className={styles.acsBlockN}>
                  {" "}
                  <img
                    className={styles.posterAcs}
                    src={`/assets/images/${item.category.image_white}`}
                    alt=""
                  />
                  <p className={styles.acsName}>{item.name}</p>
                </div>
              );
            }
            return null;
          })
        : null}
      {hdd ? <p className={styles.acsTitle}>HDD:</p> : null}
      {hdd
        ? accessory.map((item) => {
            if (item._id === hdd) {
              return (
                <div key={item._id} className={styles.acsBlockN}>
                  {" "}
                  <img
                    className={styles.posterAcs}
                    src={`/assets/images/${item.category.image_white}`}
                    alt=""
                  />
                  <p className={styles.acsName}>{item.name}</p>
                </div>
              );
            }
            return null;
          })
        : null}
      <p className={styles.acsTitle}>Блок питания:</p>
      {accessory.map((item) => {
        if (item._id === power) {
          return (
            <div key={item._id} className={styles.acsBlockN}>
              {" "}
              <img
                className={styles.posterAcs}
                src={`/assets/images/${item.category.image_white}`}
                alt=""
              />
              <p className={styles.acsName}>{item.name}</p>
            </div>
          );
        }
        return null;
      })}
      <p className={styles.acsTitle}>Корпус:</p>
      {accessory.map((item) => {
        if (item._id === compCase) {
          return (
            <div key={item._id} className={styles.acsBlockN}>
              {" "}
              <img
                className={styles.posterAcs}
                src={`/assets/images/${item.category.image_white}`}
                alt=""
              />
              <p className={styles.acsName}>{item.name}</p>
            </div>
          );
        }
        return null;
      })}
    </div>
  );
};

export default Parts;
