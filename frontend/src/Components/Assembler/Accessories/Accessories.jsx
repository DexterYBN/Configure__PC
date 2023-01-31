import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAccesories, selectAccessory } from '../../../features/accessoriesSlice';
import styles from './Accessories.module.css';

const Accessories = () => {
    const accessories = useSelector((state) => state.accessories.accessories);
    const loading = useSelector((state) => state.accessories.loading);
    const error = useSelector((state) => state.accessories.error);
    const id = useSelector((state) => state.categories.category);
    const selected = useSelector((state) => state.accessories.accessory);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchAccesories({ categoryId: id }))
    }, [dispatch, id]);
    const handleAccessory = (id) => {
        dispatch(selectAccessory({ id }))
    }
    if (error) {
        return (<div className={styles.main}>
            <div> {error} </div>
        </div>)
    }

    if (loading) {
        return (
            <div className={styles.main}>
                <div className={styles.loader}></div>
            </div>
        )
    }

    return (
        <div className={styles.main}>
            {accessories.map((accessory) => {

                return (
                    <div key={accessory._id} className={selected === accessory._id ? styles.accessorySelected : styles.accessory} onClick={() => handleAccessory(accessory._id)}>
                        {accessory.name}
                        <div className={styles.accessoryBorder}></div>
                    </div>

                )
            })}
        </div>
    );
};

export default Accessories;