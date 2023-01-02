import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchAcs } from "../../../features/accessoriesSlice";
import { fetchCategories } from "../../../features/categoriesSlice";
import styles from "./Product.module.css";
const Fullstory = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const assembles = useSelector((state) => state.assembles.assembles);
  const accesory = useSelector((state) => state.accessories.acs);
  useEffect(() => {
    dispatch(fetchAcs());
    dispatch(fetchCategories());
  }, [dispatch]);
  return (
    <div className={styles.main}>
      <div className={styles.bg}>
        {assembles.map((item) => {
          if (item._id === id) {
            return (
              <div className={styles.detalic}>
                <div className={styles.detalicTitle}>
                  <div className={styles.matrix}>MATRIX</div>
                  <h1 className={styles.detalicName}>{item.name}</h1>
                  <div className={styles.detalicDescription}>
                    {item.description}
                  </div>
                  <div className={styles.buttonSection}>
                    <button className={styles.buyButton2}>Купить</button>
                    <div className={styles.priceBox}>
                      <p className={styles.detalicPrice}>
                        {item.cost}
                        <img
                          className={styles.detalicPriceImage}
                          src={`/assets/images/cost.png`}
                          alt=""
                        />
                      </p>
                    </div>
                  </div>
                  <div>
                    <div className={styles.detalicWrapper}>
                    <div className={styles.detailBLOCK}>
                    <p className={styles.detalicTit}>Комплектация</p>
                    <li className={styles.listItem}>
                        <p className={styles.listCategory}>Видео-карта</p>
                        {accesory.map((acs) => {
                          if (acs._id === item.graphics) {
                            return (
                              <div className={styles.detailBox}>
                                <img
                                  className={styles.catImage}
                                  src={`/assets/images/${acs.category.image_white}`}
                                  alt="poster"
                                />
                                <p className={styles.detailName}>{acs.name}</p>
                              </div>
                            );
                          }
                          return null;
                        })}
                      </li>
                      <li className={styles.listItem}>
                        <p className={styles.listCategory}>Процессор</p>
                        {accesory.map((acs) => {
                          if (acs._id === item.processor) {
                            return (
                              <div className={styles.detailBox}>
                                <img
                                  className={styles.catImage}
                                  src={`/assets/images/${acs.category.image_white}`}
                                  alt="poster"
                                />
                                <p className={styles.detailName}>{acs.name}</p>
                              </div>
                            );
                          }
                          return null;
                        })}
                      </li>
                      <li className={styles.listItem}>
                        <p className={styles.listCategory}>
                          Оперативная память
                        </p>
                        {accesory.map((acs) => {
                          if (acs._id === item.ram) {
                            return (
                              <div className={styles.detailBox}>
                                <img
                                  className={styles.catImage}
                                  src={`/assets/images/${acs.category.image_white}`}
                                  alt="poster"
                                />
                                <p className={styles.detailName}>{acs.name}</p>
                              </div>
                            );
                          }
                          return null;
                        })}
                      </li>
                      <li className={styles.listItem}>
                        <p className={styles.listCategory}>Материнская плата</p>
                        {accesory.map((acs) => {
                          if (acs._id === item.motherboard) {
                            return (
                              <div className={styles.detailBox}>
                                <img
                                  className={styles.catImage}
                                  src={`/assets/images/${acs.category.image_white}`}
                                  alt="poster"
                                />
                                <p className={styles.detailName}>{acs.name}</p>
                              </div>
                            );
                          }
                          return null;
                        })}
                      </li>
                      {item.ssd ? (
                        <li className={styles.listItem}>
                          <p className={styles.listCategory}>SSD</p>
                          {accesory.map((acs) => {
                            if (acs._id === item.ssd) {
                              return (
                                <div className={styles.detailBox}>
                                  <img
                                    className={styles.catImage}
                                    src={`/assets/images/${acs.category.image_white}`}
                                    alt="poster"
                                  />
                                  <p className={styles.detailName}>
                                    {acs.name}
                                  </p>
                                </div>
                              );
                            }
                            return null;
                          })}
                        </li>
                      ) : null}
                      {item.hdd ? (
                        <li className={styles.listItem}>
                          <p className={styles.listCategory}>HDD</p>
                          {accesory.map((acs) => {
                            if (acs._id === item.hdd) {
                              return (
                                <div className={styles.detailBox}>
                                  <img
                                    className={styles.catImage}
                                    src={`/assets/images/${acs.category.image_white}`}
                                    alt="poster"
                                  />
                                  <p className={styles.detailName}>
                                    {acs.name}
                                  </p>
                                </div>
                              );
                            }
                            return null;
                          })}
                        </li>
                      ) : null}
                      <li className={styles.listItem}>
                        <p className={styles.listCategory}>Блок питания</p>
                        {accesory.map((acs) => {
                          if (acs._id === item.power) {
                            return (
                              <div className={styles.detailBox}>
                                <img
                                  className={styles.catImage}
                                  src={`/assets/images/${acs.category.image_white}`}
                                  alt="poster"
                                />
                                <p className={styles.detailName}>{acs.name}</p>
                              </div>
                            );
                          }
                          return null;
                        })}
                      </li>
                      <li className={styles.listItem}>
                        <p className={styles.listCategory}>Корпус</p>
                        {accesory.map((acs) => {
                          if (acs._id === item.compCase) {
                            return (
                              <div className={styles.detailBox}>
                                <img
                                  className={styles.catImage}
                                  src={`/assets/images/${acs.category.image_white}`}
                                  alt="poster"
                                />
                                <p className={styles.detailName}>{acs.name}</p>
                              </div>
                            );
                          }
                          return null;
                        })}
                      </li>
                    </div>
                    <ul className={styles.features}>
                      <li className={styles.featuresLi}>
                        <div className={styles.featuresImgBox}>
                          <img
                            className={styles.compass}
                            src="/assets/images/compass.png"
                            alt="123"
                          />
                        </div>
                        <p className={styles.featuresText}>
                          Минимальные сроки изготовления
                        </p>
                      </li>
                      <li className={styles.featuresLi}>
                        <div className={styles.featuresImgBox}>
                          <img
                            className={styles.compass}
                            src="/assets/images/box.png"
                            alt="123"
                          />
                        </div>
                        <p className={styles.featuresText}>
                          Доставка по всей территории РФ
                        </p>
                      </li>
                      <li className={styles.featuresLi}>
                        <div className={styles.featuresImgBox}>
                          <img
                            className={styles.compass}
                            src="/assets/images/save.png"
                            alt="123"
                          />
                        </div>
                        <p className={styles.featuresText}>
                          Официальная гарантия
                        </p>
                      </li>
                      <li className={styles.featuresLi}>
                        <div className={styles.featuresImgBox}>
                          <img
                            className={styles.compass}
                            src="/assets/images/construct.png"
                            alt="123"
                          />
                        </div>
                        <p className={styles.featuresText}>
                          Официальная гарантия
                        </p>
                      </li>
                    </ul>
                    </div>
                    
                 </div>
                  </div>
              
                <img
                  className={styles.detalicPoster}
                  src={`/assets/images/assembly/${item.image}`}
                  alt=""
                />
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export { Fullstory };