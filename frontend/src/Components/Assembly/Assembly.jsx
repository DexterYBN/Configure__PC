import React, { useEffect } from "react";
import styles from "./Assembly.module.css";
import { useDispatch, useSelector } from "react-redux";
import Product from "./Product/Product";
import { fetchAcs } from "../../features/accessoriesSlice";
import { fetchCategories } from "../../features/categoriesSlice";
import { fetchCart } from "../../features/usersSlice";

const Assembly = () => {
  const assembles = useSelector((state) => state.assembles.assembles);
  const loading = useSelector((state) => state.assembles.loading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAcs());
    dispatch(fetchCart({userId: localStorage.getItem('id') }))
    dispatch(fetchCategories());
  }, [dispatch]);
  return (
    <div className={styles.main}>
      <div className={styles.bg}>
        {loading ? (
          <div className={styles.loader}></div>
        ) : (
          assembles.map((item) => {
            return (
              
              <Product
                key={item._id}
                id={item._id}
                graphics={item.graphics}
                description={item.description}
                name={item.name}
                cost={item.cost}
                image={item.image}
                processor={item.processor}
                ram={item.ram}
                motherboard={item.motherboard}
                ssd={item.ssd}
                hdd={item.hdd}
                power={item.power}
                compCase={item.compCase}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default Assembly;
