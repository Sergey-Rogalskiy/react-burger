import React, { useEffect } from 'react';
import {
  Input,
  PasswordInput,
  Button
} from '@ya.praktikum/react-developer-burger-ui-components'

import { useSelector, useDispatch  } from 'react-redux'
import {getItems} from "../../services/actions/ingridients"

import {useHistory} from 'react-router-dom'

import s from './profile.module.css'

export const ProdileEdit = () => {
  const history = useHistory();
  console.log(history)
  const dispatch = useDispatch()
  const feedData = useSelector(state => state.feed.feedData)

  const data = useSelector(state => state.registration.user)
  
  const [value, setValue] = React.useState(data)
  const onChange = e => {
    setValue({...value, [e.target.name]: e.target.value})
  }
  
  const onClick = () => {

  }
  // useEffect(() => {
  //   dispatch(getItems())
  // }, [dispatch])

  return (
    <>
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
    </>
  );
}

