import React from 'react';
import {
  ConstructorElement, 
  DragIcon, 
  Button,
  CurrencyIcon, 
} from '@ya.praktikum/react-developer-burger-ui-components'

import PropTypes from 'prop-types';
import { useSelector, useDispatch  } from 'react-redux'

import burgerConstructorStyles from './burger-constructor.module.css'

const FixedBun = (props) => {
  const data = props
  const totalPrice = useSelector(state => state.app.totalPrice)

  return (
    <>
    <div className={`${burgerConstructorStyles.flex} ${burgerConstructorStyles.confirm_block}`}>
      <div className={burgerConstructorStyles.total}>
        <span className="text text_type_main-large">
          {totalPrice}
        </span> 
        <CurrencyIcon type="primary" />
      </div>
      <Button type="primary"
        onClick={props.modal.openModal}>
        Оформить заказ
      </Button>
    </div>
  </>
  );
}

export default FixedBun;
