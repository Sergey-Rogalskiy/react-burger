import React from 'react';
import {
  Tab
} from '@ya.praktikum/react-developer-burger-ui-components'

import PropTypes from 'prop-types';

import styles from './order-details.module.css'



const OrderDetails = (props) => {
  return (
    <>
    <div>
      <img src={props.data.image} className={styles.image}/>
      <p className="text text_type_main-medium">{props.data.name}</p>
      <p className="text text_type_main-default">{props.data.type} </p>
      <div className={styles.grid}>
        <p>order, ккал</p>
        <p>Булки, г</p>
        <p>Жиры, г</p>
        <p>Углеводы, г</p>
        <p>{props.data.calories}</p>
        <p>{props.data.proteins}</p>
        <p>{props.data.fat}</p>
        <p>{props.data.carbohydrates}</p>
      </div>
    </div>
      
    </>
  );
}

OrderDetails.propTypes = {
  data: PropTypes.any
}; 

export default OrderDetails;

