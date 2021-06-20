import React from 'react'
import {
  Input,
  PasswordInput,
  Button
} from '@ya.praktikum/react-developer-burger-ui-components'
import { Link, Redirect, useHistory } from "react-router-dom"

import {useDispatch, useSelector} from 'react-redux'
import {getResetPassword} from '../../services/actions/registration'

import s from './pages.module.css'
import { useEffect } from 'react'

export default function ResetPage() {
  const dispatch = useDispatch()
  const resetPasswordData = useSelector(state => state.registration.resetPasswordData)
  const resetPasswordRequest = useSelector(state => state.registration.resetPasswordRequest)
  const resetPasswordFailed = useSelector(state => state.registration.resetPasswordFailed)
  
  const [value, setValue] = React.useState({token: '', password: '', })
  const onChange = e => {
    setValue({...value, [e.target.name]: e.target.value})
  }
  
  const onSaveClick = () => {
    dispatch(getResetPassword(value))
  }

  const history = useHistory()
  var isForgotEmail
  React.useEffect(
    () => {
      isForgotEmail  = localStorage.getItem('isForgotEmail')
      if (!isForgotEmail) {
        history.replace({pathname: '/login'})
      }
    }, [isForgotEmail]
  )
  
  if (resetPasswordRequest) {
    return (
    <div className={s.container}>
    <div className = {`${s.registration}`}>
      <p>Loading</p>
    </div>
  </div>
    )
  }

  if (resetPasswordData) {
    return (
      
    <div className={s.container}>
      <div className = {`${s.registration}`}>
      <Redirect to='/login' />
      </div>
    </div>
    )
  }

  if (resetPasswordFailed) {
    return (
      <div className={s.container}>
        <div className = {`${s.registration}`}>
          <p>error {resetPasswordFailed}</p>
        </div>
      </div>
      )
    }
  
  return (
    <>
    <div className={s.container}>
      <div className = {`${s.registration}`}>

    Восстановление пароля

    <PasswordInput 
        onChange={onChange} 
        value={value.password} 
        name={'password'} />

      <Input
        type={'text'}
        placeholder={'Введите код из письма'}
        onChange={onChange}
        value={value.email}
        name={'token'}
        error={false}
        errorText={'Ошибка'}
        size={'default'}
      />

      <Button type="primary" size="large" onClick={onSaveClick}>
          Сохранить
      </Button>

    <p>
      Вспомнили пароль?
      <Link to='/login'>
        Войти
      </Link>
    </p>
    </div>
    </div>
    
    </>
  );
}

