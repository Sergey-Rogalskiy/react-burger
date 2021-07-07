import { useSelector } from 'react-redux'

import {
  CurrencyIcon
} from '@ya.praktikum/react-developer-burger-ui-components'

import s from '../order-feed.module.css'

export const Element = (props) => {

  const testData = props.data
  const ingredients = useSelector(state => state.ingridients.items)
  let allIngridientsData
  if (testData) {
    allIngridientsData = testData.ingredients.map(item => {
      return {
        image: ingredients.filter(ingredient => ingredient._id === item)[0].image,
        price: ingredients.filter(ingredient => ingredient._id === item)[0].price
      }
    }).slice(0, 5)
  }
  const ingredientsImages = allIngridientsData.slice(0, 5)
  const totalPrice = allIngridientsData.reduce((acc, item) => acc+item.price, 0)
  
  return (
    <>
      <li 
        className={`${s.card} m-1`}>
        <div className={s.flex_row}>
          <p className="text text_type_digits-default pt-3">#{props.data.number}</p>
          <p className="text text_type_main-default text_color_inactive pt-3">{props.data.createdAt}</p>
        </div>
        <p className="text text_type_main-small pt-3">{props.data.name}</p>
        
        {
          (props.data.status === 'done') 
          ? <p className={`${s.done_clr} mb-10`}>Выполнен</p>
          : (props.data.status === 'pending') 
          ? <p className={`mb-10`}>Готовится</p> 
          : <p className={`mb-10`}>Создан</p> 
        }
        
        <div className={s.flex_row}>
            <ul className={s.images}>
              {
                ingredientsImages.map((item, index) => (
                  <li  key={index} className={`${s.round}`}>
                    <img className={s.img} src={item.image} alt="-" />
                  </li>
                ))
              }
            </ul>
            <div className={s.flex_center}>
              <span className="text text_type_main-medium p-2">
                {totalPrice}
              </span> 
              <CurrencyIcon type="primary" />
            </div>
        </div>
      </li>
    </>
  );
}

