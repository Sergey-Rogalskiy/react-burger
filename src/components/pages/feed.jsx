import React from 'react'
import {
  Input,
  PasswordInput,
  Button
} from '@ya.praktikum/react-developer-burger-ui-components'
import { Link } from "react-router-dom"

import {useDispatch, useSelector} from 'react-redux'
import {getRegister} from '../../services/actions/registration'

import {
  OrderFeed,
  CookingDoneBoard
} from '../order-feed/index'

import s from './pages.module.css'

export default function FeedPage() {
  const dispatch = useDispatch()
  return (
    <>
      <div className={s.container}>
        <div className={s.column}>
          <p className="text text_type_main-large">
            Лента заказов
          </p>
        </div>
      </div>
  
      <div className={`${s.row}`}>
        <div className={`${s.column} ${s.left}`}>
          <OrderFeed/>  
        </div>
        <div className={`${s.column} ${s.right}`}>
          <CookingDoneBoard />
        </div>
      </div>
    </>
  );
}
