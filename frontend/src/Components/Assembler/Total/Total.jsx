import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAssemblytoCart } from "../../../features/usersSlice";
import styles from "./Total.module.css";

const Total = () => {
  const configure = useSelector((state) => state.configures.configureObj2)
  const id = useSelector((state) => state.users.id)
  console.log(configure)
  const dispatch = useDispatch()
  const handleAdd = () => {
    dispatch(addAssemblytoCart({userId: id, assemblyId: configure._id}))
  }
  return (
    <div className={styles.container}>
      <div className={styles.costBox}>
        <p>Общая стоимость: {configure.cost || 0} ₽ </p>
      </div>
      <div className={styles.cartBox}>
        <button onClick={() => handleAdd()}>В корзину</button>
      </div>
    </div>
  );
};

export default Total;
