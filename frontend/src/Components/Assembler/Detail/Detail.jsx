import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editConfigure } from '../../../features/configuresSlice';
import styles from './Detail.module.css';

const Detail = () => {
    const accessories = useSelector((state) => state.accessories.accessories);
    const configure = useSelector((state) => state.configures.configure)

    const dispatch = useDispatch()
    const selectedAccessory = useSelector((state) => state.accessories.accessory);
    const handleAddToConfigure = ({ value, key, cost }) => {
        dispatch(editConfigure({ key, value, cost, id: configure }))
    }
    
    return (
        <>
            {accessories.map((accessory) => {
                if (selectedAccessory === accessory._id) {
                    return (
                        <div key={accessory._id} className={styles.main}>
                            <div className={styles.first}>
                                <div className={styles.goal}><img src={`/assets/images/accessories/${accessory.image}`} alt="image" className={styles.image} /></div>
                                <div className={styles.second}>
                                    <div className={styles.cost}> {accessory.cost} ₽</div>
                                    <button className={styles.btn} onClick={() => handleAddToConfigure({ value: selectedAccessory, key: accessory.category.key, cost: accessory.cost })}>Выбрать</button>
                                </div>
                            </div>

                            <div className={styles.description}> {accessory.description}</div>

                        </div>
                    )
                }
            })}
        </>
    );
};

export default Detail;