import React, {useCallback} from 'react';
import {
  ConstructorElement, 
  DragIcon, 
  Button,
  CurrencyIcon, 
} from '@ya.praktikum/react-developer-burger-ui-components'

import PropTypes from 'prop-types';

import { useSelector, useDispatch  } from 'react-redux'

import { useDrop, useDrag } from "react-dnd";
import {
  ADD_ITEM_TO_CONSTRUCTOR,
  DELETE_ITEM_FROM_CONSTRUCTOR,
  CHANGE_ORDER_OF_ITEMS_IN_CONSTRUCTOR
} from "../../services/actions/app"

import Ingridient from './ingridient' 

import burgerConstructorStyles from './burger-constructor.module.css'

const Ingridients = (props) => {
  const data = props
  const dispatch = useDispatch();
  
  const moveCard = (dragIndex, hoverIndex) => {
    console.log('aaaaa')
      dispatch({
        type: CHANGE_ORDER_OF_ITEMS_IN_CONSTRUCTOR,
        dragIndex,
        hoverIndex
      });
    }

  return (
    <>
      <div 
        className={`${burgerConstructorStyles.overflow}  
        ${burgerConstructorStyles.center}`}
      >
        {
          data.items[0]
          ?
          data.items.map((item, index) => 
            <Ingridient 
            item={item} 
            index={index}
            moveCard={moveCard}
          />
          )
          :
          <div>Ну хорош ломаться, дрэгни сюда свои булочки</div>
        }
      </div>
  </>
  );
}

export default Ingridients;