import React from 'react'
import {
  Input,
  Button
} from '@ya.praktikum/react-developer-burger-ui-components'
import { Link, Redirect  } from "react-router-dom"
import { useSelector } from '../../types'
import { useDispatch } from '../../types'
import {getForgotPassword} from '../../services/actions/registration'
import Spinner from '../utils/loader'

import s from './pages.module.css'

const ForgotPaswordPage = () => {
  const dispatch = useDispatch()
  const forgotPasswordData = useSelector(state => state.registration.forgotPasswordData)
  const forgotPasswordRequest = useSelector(state => state.registration.forgotPasswordRequest)
  const forgotPasswordFailed = useSelector(state => state.registration.forgotPasswordFailed)
  

  const [value, setValue] = React.useState({email: '', password: '', })
  const onChange = (e:any) => {
    setValue({...value, [e.target.name]: e.target.value})
  }
  
  const inputRef = React.useRef(null)
  const onRestoreClick = (e:any) => {
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
    <Spinner/>
    </div>
  </div>
    )
  }

  if (localStorage.getItem('isForgotEmail')) {
    return (
      
    <div className={s.container}>
      <div className = {`${s.registration}`}>
      <Redirect to='/reset-password' />
      </div>
    </div>
    )
  }

  if (forgotPasswordFailed) {
    return (
      <div className={s.container}>
        <div className = {`${s.registration}`}>
          <p>alert error {forgotPasswordFailed}</p>
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

      {(forgotPasswordData?.message)
          ? <p>
              {forgotPasswordData.message}
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
