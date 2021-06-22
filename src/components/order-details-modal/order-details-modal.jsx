import PropTypes from 'prop-types';
import {
  CurrencyIcon
} from '@ya.praktikum/react-developer-burger-ui-components'

import s from './order-details-modal.module.css'

import { useSelector  } from 'react-redux'



const OrderDetailsModal = () => {
  const currentItemToView = useSelector(state => state.ingridients.currentItemToView)
  const data = currentItemToView.item
  return (
    <>
      {
        currentItemToView
        ?
        <>
        <div className={s.modal}>
          
        <p className={`${s.center} text text_type_digits-default mb-2`}>#{data._id}</p>
        <p className="text text_type_main-medium">{data.name}</p>
        {
          data.idDone 
          ? <p className={`${s.done_clr} mb-10`}>Выполнен</p>
          : <p className={`mb-10`}>Готовится</p>}
        
        <p className="text text_type_main-medium mb-6">Состав:</p>
        <ul>
            
            {
              data.ingridients.map((item, index) => (
                <li  key={index} className={s.flex_row}>
                  <div className={s.flex_center}>
                    <img className={s.img} src={item.image} alt="-" />
                    <span className='p-3'>{item.name}</span>
                  </div>
                  <div className={`${s.flex_center} mb-3`}>
                      <span className='p-2'>{item.type ==='bun'? '2' : '1'} x {item.price}</span>
                      <CurrencyIcon type="primary" />
                  </div>
                </li>
              ))
            }
        </ul>
        
        <div className={s.flex_row}>
            <p className="text text_type_main-default text_color_inactive pt-3">{data.time}</p>
            
            <div className={s.flex_center}>
              <span className="text text_type_main-medium p-2">
                {data.price}
              </span> 
              <CurrencyIcon type="primary" />
            </div>
          </div>
          
        </div>
        </>
        :
        <div>Дай подумать о мармышках</div>
      }
    </>
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


OrderDetailsModal.propTypes = {
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isDone: PropTypes.boolean.isRequired,
  ingridients: ingridientPropTypes.isRequired,
  time: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
}; 
export default OrderDetailsModal;

