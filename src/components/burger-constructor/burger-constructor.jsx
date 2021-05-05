import React from 'react';
import {
  ConstructorElement, 
  DragIcon, 
  Button,
  CurrencyIcon, 
} from '@ya.praktikum/react-developer-burger-ui-components'

import Modal from '../modal/modal'
import PropTypes from 'prop-types';
import OrderDetails from '../order-details/order-details'


import burgerConstructorStyles from './burger-constructor.module.css'

const BurgerConstructor = (props) => {

  const [visible, setVisible] = React.useState(false)
  const openModal = () => {
      setVisible(true)
  }
  const closeModal = () => {
      setVisible(false)
  }

  const modal = (
    <Modal header="&nbsp;" onClose={closeModal}> 
      <OrderDetails data={{order_id: "030654"}}/>
    </Modal>
  );

  React.useEffect(() => {
    document.addEventListener("keyup", handleKeyUp);

    return () => {
      document.removeEventListener("keyup", handleKeyUp);
    }
  });
    
  const handleKeyUp = (e) => {
    const keys = {
      27: () => {
        e.preventDefault();
        closeModal();
        window.removeEventListener('keyup', handleKeyUp, false);
      },
    };
  
    if (keys[e.keyCode]) { keys[e.keyCode](); }
  }
  
  // let obj = props.data.filter(obj1 => obj1.type === "sauce");
  let obj = props.data;
  return (
    <div className={burgerConstructorStyles.flex}>
      <div className={`${burgerConstructorStyles.center} pb-2`}>
        <ConstructorElement
            text={props.data[0].name}
            thumbnail={props.data[0].image}
            price={props.data[0].price}
            type="top"
            isLocked={true}
             />
      </div>

      <div className={`${burgerConstructorStyles.overflow}  ${burgerConstructorStyles.center}`}>
        {
        obj.map((item) => (
          <div key={item._id} className={` ${burgerConstructorStyles.center}  pb-2`}>
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
            text={props.data[0].name}
            thumbnail={props.data[0].image}
            price={props.data[0].price}
            type="bottom"
            isLocked={true}/>
      </div>

      <div className={`${burgerConstructorStyles.flex} ${burgerConstructorStyles.confirm_block}`}>
        <div className={burgerConstructorStyles.total}>
          <span className="text text_type_main-large">
            3600
          </span> 
          <CurrencyIcon type="primary" />
        </div>
        <Button type="primary"
        onClick={(()=>{openModal()})}>
          Оформить заказ
        </Button>
      </div>
      {visible && modal}

    </div>
  );
}

const ingridientPropTypes = PropTypes.shape({
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  proteins: PropTypes.number.isRequired,
  fat: PropTypes.number.isRequired,
  carbohydrates: PropTypes.number.isRequired,
  calories: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  image_mobile: PropTypes.string.isRequired,
  image_large: PropTypes.string.isRequired,
  __v: PropTypes.number.isRequired,
});

BurgerConstructor.propTypes = {
  data: PropTypes.arrayOf(ingridientPropTypes.isRequired)
}; 

export default BurgerConstructor;
