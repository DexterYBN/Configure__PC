import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addAssemblytoCart } from "../../../features/usersSlice";
import Parts from "./Parts";
import styles from "./Product.module.css";

const Product = ({
  id,
  ssd,
  hdd,
  name,
  processor,
  motherboard, 
  ram,
  power,
  compCase,
  graphics,
  description,
  cost,
  image,
}) => {
  const dispatch = useDispatch();
  const [inCart, setInCart] = useState(false);
  const cart = useSelector((state) => state.users.cart);
  useEffect(() => {
    if (cart) {
      cart.map((assembly) => {
        if (assembly === id) {
          return setInCart(true);
        }
      });
    }
    
  }, [cart, id]);
  const handleAdd = () => {
    setInCart(true);
    dispatch(
      addAssemblytoCart({
        userId: localStorage.getItem("id"),
        assemblyId: id,
      })
    );
  };

  return (
    <div className={styles.productContainer}>
      <img
        className={styles.poster}
        src={`/assets/images/assembly/${image}`}
        alt=""
      />
      <Link to={`/assembly/${id}`}>
        {" "}
        <div className={styles.title}>{name}</div>
      </Link>
      <div className={styles.price}>{cost} ₽</div>
      <div className={styles.buttons}>
        {inCart ? (
          <div className={styles.buyButtonS}>В корзине</div>
        ) : cart ? (
          <div onClick={handleAdd} className={styles.buyButton}>
            Купить
          </div>
        ) : (
          <div className={styles.buyButton}>Купить</div>
        )}

        <Link to={`/assembly/${id}`}>
          <div className={styles.buttonMore}>Подробнее</div>
        </Link>
      </div>
      <p className={styles.description}>{description}</p>
      <div className={styles.line}></div>
      <div className={styles.catalog}>
        <Parts
          ssd={ssd}
          graphics={graphics}
          processor={processor}
          ram={ram}
          hdd={hdd}
          motherboard={motherboard}
          power={power}
          compCase={compCase}
        />
      </div>
    </div>
  );
};

export default Product;
