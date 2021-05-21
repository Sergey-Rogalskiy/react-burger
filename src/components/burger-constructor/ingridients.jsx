import React from 'react';
import {
  ConstructorElement, 
  DragIcon, 
  Button,
  CurrencyIcon, 
} from '@ya.praktikum/react-developer-burger-ui-components'

import PropTypes from 'prop-types';

import { useSelector, useDispatch  } from 'react-redux'

import { useDrop } from "react-dnd";
import {
  ADD_ITEM_TO_CONSTRUCTOR,
  DELETE_ITEM_FROM_CONSTRUCTOR
} from "../../services/actions/app"

import burgerConstructorStyles from './burger-constructor.module.css'

const Ingridient = (props) => {
  const data = props
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
    <>
      <div 
      ref={drop}
        className={`${burgerConstructorStyles.overflow}  
        ${burgerConstructorStyles.center}`}
      >
        {
        data.items.map((item) => (
          <div key={item._id+Math.random()} className={` ${burgerConstructorStyles.center}  pb-2`}>
            <DragIcon type="primary" />
            <ConstructorElement
              text={item.name}
              thumbnail={item.image}
              price={item.price}
              handleClose={
                () => {
                  dispatch({
                    type: DELETE_ITEM_FROM_CONSTRUCTOR,
                    item,
                  })
                }
              }/>
            </div>
        ))
        }
      </div>
  </>
  );
}

export default Ingridient;