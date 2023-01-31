import React, { useEffect } from "react";
import styles from "./Categories.module.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchCategories, setCategory } from "../../../features/categoriesSlice";

const Categories = () => {
  const categories = useSelector((state) => state.categories.categories);
  // const accessories = useSelector((state) => state.accessories.accessories)
  const loading = useSelector((state) => state.categories.loading);
  const error = useSelector((state) => state.categories.error);
  const selected = useSelector((state) => state.categories.category);
  // const { processor, motherboard, graphics, ram, hdd, ssd, compCase, power, sound, os, mouse, keyboard, monitor, headset } = useSelector((state) => state.configures.configureObj)
  const dispatch = useDispatch();
  const handleCategory = (id) => {
    dispatch(setCategory({ id }))
  }
  useEffect(() => {
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
          // accessories.map((accessory) => {
          //   if ((accessory._id === processor) || (accessory._id === motherboard)
          //   || (accessory._id === graphics) || (accessory._id === ram)
          //   || (accessory._id === hdd) || (accessory._id === ssd)
          //   || (accessory._id === compCase) || (accessory._id === power)
          //   || (accessory._id === sound) || (accessory._id === os)
          //   || (accessory._id === mouse) || (accessory._id === keyboard)
          //   || (accessory._id === monitor) || (accessory._id === headset)) {
          //   return (
          //     <div className={styles.categoryItem} key={item._id} onClick={() => handleCategory(item._id)}>


          //       <img className={styles.image} src={`/assets/images/${item.image}`} alt="" />
          //       <div className={styles.itemNameRedSelected}>{item.name}</div>

          //     </div>
          //   )
          // }
          // })

          return (

            <div className={styles.categoryItem} key={item._id} onClick={() => handleCategory(item._id)}>


              <img className={styles.image} src={`/assets/images/${selected === item._id ? item.image : item.image_white}`} alt="" />
              <div className={selected === item._id ? styles.itemNameRed : styles.itemName}>{item.name}</div>

            </div>
          )
        })}
      </div>
    </div>

  )
}

export default Categories;
