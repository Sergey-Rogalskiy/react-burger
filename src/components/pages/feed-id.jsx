import React from 'react'
import {
  Input,
  PasswordInput,
  Button
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
        <p>#{data._id}</p>
        <p>{data.name}</p>
        <p>{data.idDone ? 'Выполнен' : 'Готовится'}</p>
        
        <ul>
            
            {
              data.ingridients.map((item, index) => (
                <div className={s.flex_row}>
                  <div>
                    <img className={s.img} src={item.image} alt="-" />
                    <span>{item.name}</span>
                  </div>
                  <p>{item.type ==='bun'? '2' : '1'} x {item.price} SB</p>
                </div>
              ))
            }
        </ul>
        
        <div className={s.flex_row}>
            <p>{data.time}</p>
            <p>{data.price} SB</p>
          </div>
      </div>
    </>
  );
}
