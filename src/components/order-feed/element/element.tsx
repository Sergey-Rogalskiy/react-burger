import { TIngredient, useSelector } from '../../../types'
import { FC } from 'react'

import {
  CurrencyIcon
} from '@ya.praktikum/react-developer-burger-ui-components'

import s from '../order-feed.module.css'

export const Element: FC<any> = (props) => {
  
  const testData = props.data
  const ingredients = useSelector(state => state.ingridients.items)
  let allIngridientsData
  let ingredientsImages = []
  let totalPrice
  if (ingredients.length !== 0) {
    allIngridientsData = testData.ingredients.map((item:string) => {
      const ingredient = ingredients.filter((ingredient:TIngredient) => ingredient._id === item)
      let image
      let price
      if (ingredient[0]){
        image = ingredient[0].image
        price = ingredient[0].price
      }
      return {
        image,
        price
      }
    }).slice(0, 5)
  ingredientsImages = allIngridientsData.slice(0, 5)
  totalPrice = allIngridientsData.reduce((acc:number, item:TIngredient) => acc+item.price, 0)
  }
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
          ? <p className={`${s.done_clr} mb-10s`}>Выполнен</p>
          : (props.data.status === 'pending') 
          ? <p className={`mb-10`}>Готовится</p> 
          : <p className={`mb-10`}>Создан</p> 
        }
        
        <div className={s.flex_row}>
            <ul className={s.images}>
              {
                ingredientsImages.map((item:TIngredient, index:number) => (
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

