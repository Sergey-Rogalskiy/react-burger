import {
  CurrencyIcon
} from '@ya.praktikum/react-developer-burger-ui-components'
import React from 'react';
import { useSelector, useDispatch } from '../../types'
import { useParams } from 'react-router-dom'
import { getOrderById } from '../../services/actions/feed';
import { TIngredient } from '../../types';

import s from './pages.module.css'

export default function FeedIdPage() {
  const param = useParams<{id:string}>();
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(getOrderById(param.id))
  }, [dispatch, param.id])


  const orderId = useSelector(state => state.feed.orderId)
  const data = orderId
  // if (!data && (data === undefined)) {
  //   return <Redirect to='/404' />
  // }
  
  const ingredients = useSelector(state => state.ingridients.items)
  let allIngridientsData
  let ingredientsImages: any = []
  let totalPrice
  if (data && ingredients.length !== 0) {
    allIngridientsData = data.ingredients.map((item:string) => {
      const ingredient = ingredients.filter((ingredient:TIngredient) => ingredient._id === item)
      let image
      let price
      let name
      if (ingredient[0]){
        image = ingredient[0].image
        price = ingredient[0].price
        name = ingredient[0].name
      }
      return {
        image,
        price,
        name
      }
    })
  ingredientsImages = allIngridientsData
  totalPrice = allIngridientsData.reduce((acc:number, item: any) => acc+item.price, 0)
  }

  if (!data) {
    return <div>lalala</div>
  }

  return (
    <>
      <div className={s.container}>
        <p className={`${s.center} text text_type_digits-default mb-2`}>#{data.number}</p>
        <p className="text text_type_main-medium">{data.name}</p>
        {
          data.status 
          ? <p className={`${s.done_clr} mb-10`}>Выполнен</p>
          : <p className={`mb-10`}>Готовится</p>}
        
        <p className="text text_type_main-medium mb-6">Состав:</p>
        <ul>
            
            {
              ingredientsImages.map((item: TIngredient, index: number) => (
                
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
            <p className="text text_type_main-default text_color_inactive pt-3">{data.createdAt}</p>
            
            <div className={s.flex_center}>
              <span className="text text_type_main-medium p-2">
                {totalPrice}
              </span> 
              <CurrencyIcon type="primary" />
            </div>
          </div>
      </div>
    </>
  );
}
