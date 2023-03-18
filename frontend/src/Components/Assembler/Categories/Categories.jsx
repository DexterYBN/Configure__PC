import React from "react";
import styles from "./Categories.module.css";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchCategories,
  setCategory,
} from "../../../features/categoriesSlice";

const Categories = () => {
  const categories = useSelector((state) => state.categories.categories);
  const loading = useSelector((state) => state.categories.loading);
  const error = useSelector((state) => state.categories.error);
  const selected = useSelector((state) => state.categories.category);

  const dispatch = useDispatch();

  const handleCategory = (id) => {
    dispatch(setCategory({ id }));
  };

  React.useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  if (error) {
    return <div>{error}</div>;
  }

  if (loading) {
    return <div className={styles.loader}></div>;
  }

  return (
    <div className={styles.main}>
      <div className={styles.categoriesContainer}>
        {categories.map((item) => {
          return (
            <div
              className={styles.categoryItem}
              key={item._id}
              onClick={() => handleCategory(item._id)}
            >
              <img
                className={styles.image}
                src={`/assets/images/${
                  selected === item._id ? item.image : item.image_white
                }`}
                alt=""
              />
              <div
                className={
                  selected === item._id ? styles.itemNameRed : styles.itemName
                }
              >
                {item.name}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
