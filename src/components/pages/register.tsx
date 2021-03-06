import React from 'react'
import {
  Input,
  PasswordInput,
  Button
} from '@ya.praktikum/react-developer-burger-ui-components'
import { Link, Redirect } from "react-router-dom"

import {useDispatch, useSelector} from 'react-redux'
import {getRegister} from '../../services/actions/registration'
import Spinner from '../utils/loader'

import s from './pages.module.css'

function RegisterPage() {
  const dispatch = useDispatch()
  const registerRequest = useSelector((state:any) => state.registration.registerRequest)
  const registerFailed = useSelector((state:any) => state.registration.registerFailed)
  const user = useSelector((state:any) => state.registration.user)

  
  const [value, setValue] = React.useState({name: '', email: '', password: '', })
  const onChange =(e:any) => {
    setValue({...value, [e.target.name]: e.target.value})
  }
  
  const inputRef = React.useRef(null)
  const onRegisterClick = (e:any) => {
    e.preventDefault()
    dispatch(getRegister(value))
  }

  if (user) {
    return (
      <div className = {`${s.container} `}>
        <div className = {`${s.registration}`}>
         <p className="text text_type_main-medium m-3 mt-15">
          <Redirect to='/profile'/>
         </p>
        </div>
      </div>
    )
  }
  
  if (registerRequest) {
    return (
      <div className = {`${s.container} `}>
        <div className = {`${s.registration}`}>
         <p className="m-3 mt-15">
         <Spinner/>
         </p>
        </div>
      </div>
    )
  }
  
  return (
    <>
    <div className={s.container}>
      <div className = {`${s.registration}`}>

      <p className="text text_type_main-medium m-3 mt-15">
        Регистрация
        </p>
        {
          (registerFailed) ? (
            <p className={`${s.text_color_error} text text_type_main-default m-3 colors-interface-error`}>
            Error: {(registerFailed.message ? registerFailed.message: 'TBC')}
            </p>
          ) : (
            <p className={`${s.text_color_error} text text_type_main-default m-3 colors-interface-error`}>
               
            </p>
          )
        }

<form onSubmit={(e) => onRegisterClick(e)}>
      <Input
        type={'text'}
        placeholder={'Имя'}
        onChange={onChange}
        value={value.name}
        name={'name'}
        error={false}
        ref={inputRef}
        errorText={'Ошибка'}
        size={'default'}
      />

      <Input
        type={'email'}
        placeholder={'E-mail'}
        onChange={onChange}
        value={value.email}
        name={'email'}
        error={false}
        errorText={'Ошибка'}
        size={'default'}
      />

      <PasswordInput 
        onChange={onChange} 
        value={value.password} 
        name={'password'} />
      <Button type="primary" size="large">
        Зарегистрироваться
      </Button>
      </form>
    <p className="text text_type_main-default text_color_inactive m-3 mt-15">
      Уже зарегистрированы? 
      <Link to='/login' className={s.link}>
         Войти
      </Link>
    </p>
    </div>
    </div>
    
    </>
  );
}

export default RegisterPage;
