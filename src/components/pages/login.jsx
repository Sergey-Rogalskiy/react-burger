import React from 'react'
import {
  Logo, 
  BurgerIcon, 
  ListIcon,
  ProfileIcon,
  EmailInput,
  Input,
  PasswordInput,
  Button
} from '@ya.praktikum/react-developer-burger-ui-components'
import { Link } from "react-router-dom"

import s from './pages.module.css'

function LoginPage() {
  
  const [value, setValue] = React.useState({email: '', password: '', })
  const onChange = e => {
    setValue({...value, [e.target.name]: e.target.value})
  }
  
  const inputRef = React.useRef(null)
  const onEnterClick = () => {
    console.log('fafaf')
    setTimeout(() => inputRef.current.focus(), 0)
    alert('Icon Click Callback')
  }
  
  
  return (
    <>
    <div className = {`${s.container} `}>
      <div className = {`${s.registration}`}>

        Вход

        <Input
          type={'text'}
          placeholder={'E-mail'}
          onChange={e => setValue(e.target.value)}
          value={value.name}
          name={'email'}
          error={false}
          ref={inputRef}
          errorText={'Ошибка'}
          size={'default'}
        />

        <PasswordInput 
          onChange={onChange} 
          value={value.value} 
          name={'password'} />
        
        <Button 
          type="primary" 
          size="large" 
          onCLick={onEnterClick}>
            Войти
        </Button>

        <p>
          Вы — новый пользователь? 
          <Link to='/register'>
          Зарегистрироваться
          </Link>
        </p>
        
        <p>
          Забыли пароль?
          <Link to='/forgot-password'>
            Восстановить пароль
          </Link> 
        </p>
      </div>
      </div>
    </>
  );
}

export default LoginPage;
