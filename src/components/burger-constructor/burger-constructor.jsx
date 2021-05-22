import React from 'react';
import {
  ConstructorElement, 
  DragIcon, 
  Button,
  CurrencyIcon, 
} from '@ya.praktikum/react-developer-burger-ui-components'

import PropTypes from 'prop-types';
import { useSelector, useDispatch  } from 'react-redux'
import FixedBun from './fixed-bun'
import Ingridients from './ingridients'
import TotalPrice from './total-price'

import { useDrop } from "react-dnd";
import {
  ADD_ITEM_TO_CONSTRUCTOR,
  DELETE_ITEM_FROM_CONSTRUCTOR,
  CHANGE_ORDER_OF_ITEMS_IN_CONSTRUCTOR
} from "../../services/actions/app"

const BurgerConstructor = (props) => {

//   const {constructorState} = React.useContext(CurrentIngridientsContext);
//  const data =constructorState
  
  const items = useSelector(state => state.app.chosenItems)
  const buns = useSelector(state => state.app.chosenBuns)
 
  const dispatch = useDispatch();
  
  const [{ isHover } , drop] = useDrop({
    accept: "ingridients",
    collect: monitor => ({
        isHover: monitor.isOver(),
    }),
    drop(item) {
      dispatch({
            type: ADD_ITEM_TO_CONSTRUCTOR,
            item,
        });
    },
  });

  return (
    <div ref={drop}>
      <FixedBun buns={buns} type="top"/>
      <Ingridients items={items}/>
        
      <FixedBun buns={buns} type="bottom"/>
      <TotalPrice modal={props.modal}/>
    </div>
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
