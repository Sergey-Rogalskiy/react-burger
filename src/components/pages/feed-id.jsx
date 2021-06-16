import React from 'react'
import {
  Input,
  PasswordInput,
  Button,
  CurrencyIcon
} from '@ya.praktikum/react-developer-burger-ui-components'
import { Link } from "react-router-dom"

import {useDispatch, useSelector} from 'react-redux'
import {getRegister} from '../../services/actions/registration'

import {useHistory, useLocation, useParams } from 'react-router-dom'

import {
  OrderFeed,
  CookingDoneBoard
} from '../order-feed/index'

import s from './pages.module.css'

export default function FeedIdPage() {
  const history = useHistory();
  // console.log(history)
  const location = useLocation();
  // console.log(location)
  const param = useParams();

  const dispatch = useDispatch()
  const data = useSelector(state => state.feed.feedData)[param.id-1]
  
  return (
    <>
      <div className={s.container}>
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
                <li className={s.flex_row}>
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
  );
}
