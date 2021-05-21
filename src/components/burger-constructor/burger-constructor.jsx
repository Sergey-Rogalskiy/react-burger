import React from 'react';
import {
  ConstructorElement, 
  DragIcon, 
  Button,
  CurrencyIcon, 
} from '@ya.praktikum/react-developer-burger-ui-components'

import PropTypes from 'prop-types';
import {CurrentIngridientsContext} from '../../context/app-context'

import { useSelector, useDispatch  } from 'react-redux'
import FixedBun from './fixed-bun'
import Ingridient from './ingridients'
import TotalPrice from './total-price'

import { useDrop } from "react-dnd";
import {ADD_ITEM_TO_CONSTRUCTOR} from "../../services/actions/app"

const BurgerConstructor = (props) => {

//   const {constructorState} = React.useContext(CurrentIngridientsContext);
//  const data =constructorState
  
const items = useSelector(state => state.app.chosenItems)
const data = {"items": items, "buns": {}, "totalPrice": 200}

const dispatch = useDispatch();

const [{ isHover } , drop] = useDrop({
  accept: "ingridient",
  collect: monitor => ({
      isHover: monitor.isOver(),
  }),
  drop(item) {
    dispatch({
          type: ADD_ITEM_TO_CONSTRUCTOR,
          ...item,
      });
  },
});

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
