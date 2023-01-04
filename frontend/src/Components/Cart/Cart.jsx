import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getConfigures } from "../../features/configuresSlice";
import { fetchCart } from "../../features/usersSlice";
import styles from "./Cart.module.css";
import CartItems from "./CartItems";
const Cart = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getConfigures())
  }, [dispatch])
  const cart = useSelector((state) => state.users.cart);
  const assembles = useSelector((state) => state.assembles.assembles);
  const configures = useSelector((state) => state.configures.configures);
  let sum = 0
  cart.forEach((cartItem) => {
    assembles.forEach((element) => {
      if (element._id === cartItem) {
        sum = sum + element.cost
      }
    })
    configures.forEach((configure) => {
      if (configure._id === cartItem) {
        sum = sum + configure.cost

      }
    })
  })

  const loading = useSelector((state) => state.users.loading);
  useEffect(() => {
    dispatch(fetchCart({ userId: localStorage.getItem('id') }))
  }, [dispatch])
  return (
    <div className={styles.main}>
      <div className={styles.bg}>
        <div>{cart.length === 0 ? <div className={styles.titleFalse}>Корзина пуста</div> : (<div className={styles.title}>Корзина</div>)}</div>
        <div className={styles.basket_start}>
          {loading ? <div className={styles.loader}></div> : cart.map((item) => { return  (<CartItems id={item} />) })}
          <h1 className={styles.globalPrice}>Общая стоимость: <div className={styles.totalCost}>{sum} <img
            className={styles.costImage}
            src="/assets/images/cost.png"
            alt=""
          /></div>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Cart;
