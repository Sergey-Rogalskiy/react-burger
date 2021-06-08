import React from 'react'
import {
  Input,
  PasswordInput,
  Button
} from '@ya.praktikum/react-developer-burger-ui-components'
import { Link } from "react-router-dom"

import {useDispatch, useSelector} from 'react-redux'
import {getRegister} from '../../services/actions/registration'

import s from './pages.module.css'

function LoginPage(props) {
  const dispatch = useDispatch()
  const registerdData = useSelector(state => state.registration.registerdData)
  const registerRequest = useSelector(state => state.registration.registerRequest)
  const registerError = useSelector(state => state.registration.registerError)

  
  const [value, setValue] = React.useState({name: '', email: '', password: '', })
  const onChange = e => {
    setValue({...value, [e.target.name]: e.target.value})
  }
  
  const inputRef = React.useRef(null)
  const onRegisterClick = () => {
    setTimeout(() => inputRef.current.focus(), 0)
    dispatch(getRegister(value))
  }
  
  if (registerRequest) {
    return <p>LOADING</p>
  }
  
  return (
    <>
    <div className={s.container}>
      <div className = {`${s.registration}`}>

        Регистрация

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
      
      <Button type="primary" size="large" onClick={onRegisterClick}>
        Зарегистрироваться
      </Button>
    <p>
      Уже зарегистрированы? 
      <Link to='/login'>
         Войти
      </Link>
    </p>
    </div>
    </div>
    
    </>
  );
}

export default LoginPage;
