import {
  CurrencyIcon
} from '@ya.praktikum/react-developer-burger-ui-components'
import { useSelector  } from 'react-redux'
import { TIngredient } from '../../types'

import s from './order-details-modal.module.css'




const OrderDetailsModal = () => {
  const currentItemToView = useSelector((state: any) => state.ingridients.currentItemToView)
  const data = currentItemToView.item
  const ingredients = useSelector((state: any) => state.ingridients.items)
  const allIngridientsData = data.ingredients.map((item:string) => {
    return {
      image: ingredients.filter((ingredient:TIngredient) => ingredient._id === item)[0].image,
      price: ingredients.filter((ingredient:TIngredient) => ingredient._id === item)[0].price,
      name: ingredients.filter((ingredient:TIngredient) => ingredient._id === item)[0].name
    }
  }).slice(0, 5)
  const totalPrice = allIngridientsData.reduce((acc: number, item: TIngredient) => acc+item.price, 0)

  return (
    <>
      {
        currentItemToView
        ?
        <>
        <div className={s.modal}>
          
        <p className={`${s.center} text text_type_digits-default mb-2`}>#{data.number}</p>
        <p className="text text_type_main-medium">{data.name}</p>
        {
          (data.status === 'done') 
          ? <p className={`${s.done_clr} mb-10`}>Выполнен</p>
          : <p className={`mb-10`}>Готовится</p>
        }
        
        <p className="text text_type_main-medium mb-6">Состав:</p>
        <ul>
            
            {
              allIngridientsData.map((item:TIngredient, index:number) => (
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
                {totalPrice}
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

export default OrderDetailsModal;

