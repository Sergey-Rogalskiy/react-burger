import React from 'react'
import {
  Input,
  PasswordInput,
  Button
} from '@ya.praktikum/react-developer-burger-ui-components'
import { Link } from "react-router-dom"

import {useDispatch, useSelector} from 'react-redux'
import {getRegister} from '../../services/actions/registration'

import {useHistory, useLocation} from 'react-router-dom'

import {
  OrderFeed,
  CookingDoneBoard
} from '../order-feed/index'

import s from './pages.module.css'

export default function FeedIdPage() {
  const history = useHistory();
  // console.log(history)
  const lcoation = useLocation();
  console.log(lcoation)

  const dispatch = useDispatch()
  const data = useSelector(state => state.feed.feedData)[0]
  
  return (
    <>
      <div className={s.container}>
          <div className={s.flex_row}>
            <p>#{data._id}</p>
            <p>{data.time}</p>
          </div>
        <p>{data.name}</p>
        
        <div className={s.flex_row}>
          <div className={s.flex_row}>
            
            {
              data.ingridients.map((item, index) => (
                <>
                  <img className={s.img} src={item.image} alt="-" />
                </>
              ))
            }
          </div>
          <p>{data.price} SB</p>
        </div>
      </div>
    </>
  );
}
