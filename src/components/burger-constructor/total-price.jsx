
import {
  Button,
  CurrencyIcon, 
} from '@ya.praktikum/react-developer-burger-ui-components'

import { useSelector  } from 'react-redux'

import burgerConstructorStyles from './burger-constructor.module.css'

const TotalPrice = (props) => {
  const totalPrice = useSelector(state => state.burgerConstructor.totalPrice)
  const chosenBuns = useSelector(state => state.burgerConstructor.chosenBuns)
  
  return (
    <>
      {
        (chosenBuns.name )
        ?<div className={`${burgerConstructorStyles.flex} ${burgerConstructorStyles.confirm_block}`}>
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
        : 
        <div></div>
      }
  </>
  );
}

export default TotalPrice;
