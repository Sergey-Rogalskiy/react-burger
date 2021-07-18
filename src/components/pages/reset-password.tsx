import React from 'react'
import {
  Input,
  PasswordInput,
  Button
} from '@ya.praktikum/react-developer-burger-ui-components'
import { Link, Redirect, useHistory } from "react-router-dom"
import { useSelector, useDispatch} from '../../types'
import {getResetPassword} from '../../services/actions/registration'
import Spinner from '../utils/loader'

import s from './pages.module.css'

export default function ResetPage() {
  const dispatch = useDispatch()
  const resetPasswordData = useSelector(state => state.registration.resetPasswordData)
  const resetPasswordRequest = useSelector(state => state.registration.resetPasswordRequest)
  const resetPasswordFailed = useSelector(state => state.registration.resetPasswordFailed)
  
  const [value, setValue] = React.useState({token: '', password: '', email: ''})
  const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setValue({...value, [e.target.name]: e.target.value})
  }
  
  const onSaveClick = (e:any) => {
    e.preventDefault()
    dispatch(getResetPassword(value))
  }

  const history = useHistory()
  var isForgotEmail
  React.useEffect(
    () => {
      isForgotEmail  = localStorage.getItem('isForgotEmail')
      if (!isForgotEmail) {
        history.replace({pathname: '/login', state: {from: '/'}})
      }
    }, [isForgotEmail]
  )
  
  if (resetPasswordRequest) {
    return (
    <div className={s.container}>
    <div className = {`${s.registration}`}>
    <Spinner/>
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
    <form onSubmit={(e) => onSaveClick(e)}>
      <Input
        type={'text'}
        placeholder={'Введите код из письма'}
        onChange={onChange}
        value={value.email}
        name={'email'}
        error={false}
        errorText={'Ошибка'}
        size={'default'}
      />

      <Button type="primary" size="large" >
          Сохранить
      </Button>
    </form>

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

