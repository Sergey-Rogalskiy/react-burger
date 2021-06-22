import React from 'react'
import {
  Input,
  Button
} from '@ya.praktikum/react-developer-burger-ui-components'
import { Link, Redirect  } from "react-router-dom"

import {useDispatch, useSelector} from 'react-redux'
import {getForgotPassword} from '../../services/actions/registration'

import s from './pages.module.css'

const ForgotPaswordPage = () => {
  const dispatch = useDispatch()
  const forgotPasswordData = useSelector(state => state.registration.forgotPasswordData)
  const forgotPasswordRequest = useSelector(state => state.registration.forgotPasswordRequest)
  const forgotPasswordError = useSelector(state => state.registration.forgotPasswordError)
  

  const [value, setValue] = React.useState({email: '', password: '', })
  const onChange = e => {
    setValue({...value, [e.target.name]: e.target.value})
  }
  
  const inputRef = React.useRef(null)
  const onRestoreClick = (e) => {
    e.preventDefault()
    dispatch(getForgotPassword(
      {
        "email": value.email
      }
    ))
  }
  
  if (forgotPasswordRequest) {
    return (
    <div className={s.container}>
    <div className = {`${s.registration}`}>
      <p>Loading</p>
    </div>
  </div>
    )
  }

  if (forgotPasswordData) {
    return (
      
    <div className={s.container}>
      <div className = {`${s.registration}`}>
      <Redirect to='/reset-password' />
      </div>
    </div>
    )
  }

  if (forgotPasswordError) {
    return (
      <div className={s.container}>
        <div className = {`${s.registration}`}>
          <p>alert error {forgotPasswordError}</p>
        </div>
      </div>
      )
    }
  
  return (
    <>
    <div className={s.container}>
      <div className = {`${s.registration}`}>

      <p className="text text_type_main-medium m-3 mt-15">
        Восстановление пароля
      </p>
        
    <form onSubmit={(e) => onRestoreClick(e)}>
      <Input
        type={'email'}
        placeholder={'Укажите e-mail'}
        onChange={onChange}
        value={value.email}
        name={'email'}
        error={false}
        ref={inputRef}
        errorText={'Ошибка'}
        size={'default'}
      />

      {(forgotPasswordData?.response?.message)
          ? <p>
              {forgotPasswordData.response.message}
            </p>
          : ''
          }
      <Button type="primary" size="large">
          Восстановить
      </Button>
      </form>
      <p className="text text_type_main-default text_color_inactive m-3 mt-15">
        Вспомнили пароль?
        <Link to='/login'  className={s.link}>
          Войти
        </Link>

      </p>
    </div>
    </div>
    
    </>
  );
}

export default ForgotPaswordPage;
