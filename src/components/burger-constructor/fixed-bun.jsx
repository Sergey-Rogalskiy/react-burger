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
      {
      (data.buns) 
      ?
      <div className={burgerConstructorStyles.flex}>
        <div className={`${burgerConstructorStyles.center} pb-2`}>
          <ConstructorElement
              text={data.buns.name}
              thumbnail={data.buns.image}
              price={data.buns.price}
              type={data.type}
              isLocked={true}
          />
        </div>
      </div>
      : 
      <div>Choose your bun</div>
      }
  </>
  );
}

export default FixedBun;
