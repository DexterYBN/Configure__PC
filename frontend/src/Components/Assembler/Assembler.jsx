import React from "react";
import Categories from "./Categories/Categories";
import styles from "./Assembler.module.css";
import Accessories from "./Accessories/Accessories";
import Detail from "./Detail/Detail";
import Total from "./Total/Total";
import Main from "./Main/Main";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addConfigure } from "../../features/configuresSlice";

const Assembler = () => {
  const dispatch = useDispatch()
  const configure = useSelector((state) => state.configures.configure)

  useEffect(() => {
    if (!configure) {
      dispatch(addConfigure())
    }
  }, [dispatch, configure])

  return (
    <>
      <Main />
      <div className={styles.main}>
        <div className={styles.bg}>
          <Categories id={configure} />
          <Accessories key={'key'} id={configure} />
          <Detail id={configure} />
          <Total id={configure} />
        </div>
      </div></>
  );
};

export default Assembler;
