import orderDoneImg from '../../images/order-done.svg';

import { useSelector  } from 'react-redux'

import styles from './order-details.module.css'


const OrderDetails = () => {
  const order = useSelector(state => state.burgerConstructor.order)
  return (
    <>
    {
      order
      ?
      <div className={styles.main}>
        <p className={`${styles.wrapped} text text_type_digits-large`}>{order.order.number}</p>
        <p className="text text_type_main-medium">идентификатор заказа</p>
        <img className={styles.image} src={orderDoneImg} alt="Done!"/>
        <p className="text text_type_main-default">Ваш заказ начали готовить</p>
        <p className="text text_type_main-default">Дождитесь готовности на орбитальной станции</p>
      </div>
      :
      <div>Подождите, ожидаем номер заказа...</div>
    }

      
    </>
  );
}



export default OrderDetails;

