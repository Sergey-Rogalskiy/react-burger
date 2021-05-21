import React from 'react';
import {
  ConstructorElement, 
  DragIcon, 
  Button,
  CurrencyIcon, 
} from '@ya.praktikum/react-developer-burger-ui-components'

import PropTypes from 'prop-types';
import {CurrentIngridientsContext} from '../../context/app-context'

import { useSelector } from 'react-redux'
import FixedBun from './fixed-bun'
import Ingridient from './ingridients'
import TotalPrice from './total-price'


import burgerConstructorStyles from './burger-constructor.module.css'

const BurgerConstructor = (props) => {

//   const {constructorState} = React.useContext(CurrentIngridientsContext);
//  const data =constructorState
  
const items = useSelector(state => state.app.items)
const data = {"items": [{}], "buns": {}, "totalPrice": 200}

  return (
    <>
      <FixedBun buns={data.buns} type="top"/>
      <Ingridient items={data.items}/>
        
      <FixedBun buns={data.buns} type="bottom"/>
      <TotalPrice modal={props.modal} totalPrice={data.totalPrice}/>
    </>
  );
}

const modalType = PropTypes.shape({
  visible: PropTypes.boolean,
  openModal: PropTypes.function,
  closeModal: PropTypes.function,
});

BurgerConstructor.propTypes = {
  modal: modalType
}; 

export default BurgerConstructor;
