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

export default function ProfilePage() {
  const history = useHistory();
  // console.log(history)
  const lcoation = useLocation();
  console.log(lcoation)

  const dispatch = useDispatch()
  const data = useSelector(state => state.registration.user)
  
  const [value, setValue] = React.useState(data)
  const onChange = e => {
    setValue({...value, [e.target.name]: e.target.value})
  }
  
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
        <div className={`${s.column} ${s.left} ${s.flex_column}`}>
          <Link to='/profile'>Профиль</Link>
          <Link to='/profile/orders'>История Заказов</Link>
          <Link to='/login'>Выход</Link>
          <p className={s.caption}>В этом разделе вы можете изменить свои персональные данные</p>
        </div>

        <div className={`${s.column} ${s.right}`}>
        <Input
          type={'text'}
          placeholder={'Имя'}
          onChange={e => onChange(e)}
          icon={'EditIcon'}
          value={value.name}
          name={'name'}
          error={false}
          onIconClick={e=>{console.log(e)} }
          errorText={'Ошибка'}
          size={'default'} />

        <Input
          type={'text'}
          placeholder={'E-mail'}
          onChange={e => onChange(e)}
          icon={'EditIcon'}
          value={value.email}
          name={'email'}
          error={false}
          onIconClick={e=>{console.log(e)} }
          errorText={'Ошибка'}
          size={'default'} />

        <Input
          type={'text'}
          placeholder={'Пароль'}
          onChange={e => onChange(e)}
          icon={'EditIcon'}
          value={value.password}
          name={'password'}
          error={false}
          onIconClick={e=>{console.log(e)} }
          errorText={'Ошибка'}
          size={'default'} />

        </div>
      </div>
    </>
  );
}
