
import {
  Button,
  CurrencyIcon, 
} from '@ya.praktikum/react-developer-burger-ui-components'

import { useSelector  } from 'react-redux'
import {useHistory, useLocation} from 'react-router-dom'

import burgerConstructorStyles from './burger-constructor.module.css'

const TotalPrice = (props) => {
  const totalPrice = useSelector(state => state.burgerConstructor.totalPrice)
  const chosenBuns = useSelector(state => state.burgerConstructor.chosenBuns)
  const user = useSelector(state => state.registration.user)
  const history = useHistory()
  const location = useLocation()

const realConfirm = () => {
  props.modal.openModal();
  history.push( {pathname: `/order_confirmation`,
    state: { background: location }})
}

  const confirmOrder = () => {
    user ? (
      realConfirm()
    ) : (
      history.push({
        pathname: '/login',
        state: {from: location}
    })
    )
  }
  
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
          onClick={confirmOrder}>
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
