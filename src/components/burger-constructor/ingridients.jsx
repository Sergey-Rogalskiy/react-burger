import React from 'react';
import {
  ConstructorElement, 
  DragIcon, 
  Button,
  CurrencyIcon, 
} from '@ya.praktikum/react-developer-burger-ui-components'

import PropTypes from 'prop-types';

import burgerConstructorStyles from './burger-constructor.module.css'

const FixedBun = (props) => {
  const data = props

  return (
    <>
      <div className={`${burgerConstructorStyles.overflow}  ${burgerConstructorStyles.center}`}>
        {
        data.items.map((item) => (
          <div key={item._id+Math.random()} className={` ${burgerConstructorStyles.center}  pb-2`}>
            <DragIcon type="primary" />

            <ConstructorElement
              text={item.name}
              thumbnail={item.image}
              price={item.price}/>
            </div>
        ))
        }
      </div>
  </>
  );
}

export default FixedBun;
