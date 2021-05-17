import PropTypes from 'prop-types';
import orderDoneImg from '../../images/order-done.svg';


import styles from './order-details.module.css'



const OrderDetails = (props) => {
  return (
    <>
    <div className={styles.main}>
      <p className={`${styles.wrapped} text text_type_digits-large`}>{props.data.order_id}</p>
      <p className="text text_type_main-medium">идентификатор заказа</p>
      <img className={styles.image} src={orderDoneImg} alt="Done!"/>
      <p className="text text_type_main-default">Ваш заказ начали готовить</p>
      <p className="text text_type_main-default">Дождитесь готовности на орбитальной станции</p>
    </div>

      
    </>
  );
}

OrderDetails.propTypes = {
  data: PropTypes.shape({
    order_id: PropTypes.number,
  })
}; 


export default OrderDetails;

