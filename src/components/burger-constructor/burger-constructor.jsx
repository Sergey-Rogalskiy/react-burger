import React from 'react';
import {
  ConstructorElement, 
  DragIcon, 
  Button,
  CurrencyIcon, 
} from '@ya.praktikum/react-developer-burger-ui-components'

import PropTypes from 'prop-types';
import {CurrentIngridientsContext} from '../../context/app-context'


import burgerConstructorStyles from './burger-constructor.module.css'

const BurgerConstructor = (props) => {

  const {constructorState} = React.useContext(CurrentIngridientsContext);
 const data =constructorState
  
  return (
    (data.items &&
    <div className={burgerConstructorStyles.flex}>
      <div className={`${burgerConstructorStyles.center} pb-2`}>
        <ConstructorElement
            text={data.buns.name}
            thumbnail={data.buns.image}
            price={data.buns.price}
            type="top"
            isLocked={true}
             />
      </div>

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

      <div className={`${burgerConstructorStyles.center} `}>
        <ConstructorElement
            text={data.buns.name}
            thumbnail={data.buns.image}
            price={data.buns.price}
            type="bottom"
            isLocked={true}/>
      </div>

      <div className={`${burgerConstructorStyles.flex} ${burgerConstructorStyles.confirm_block}`}>
        <div className={burgerConstructorStyles.total}>
          <span className="text text_type_main-large">
            {data.totalPrice}
          </span> 
          <CurrencyIcon type="primary" />
        </div>
        <Button type="primary"
          onClick={props.modal.openModal}>
          Оформить заказ
        </Button>
      </div>

    </div>
      )
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
