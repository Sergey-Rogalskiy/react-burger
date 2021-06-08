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

function LoginPage(props) {
  
  const [value, setValue] = React.useState({email: '', password: '', })
  const onChange = e => {
    setValue({...value, [e.target.name]: e.target.value})
  }
  
  const inputRef = React.useRef(null)
  const onIconClick = () => {
    setTimeout(() => inputRef.current.focus(), 0)
    alert('Icon Click Callback')
  }
  
  
  return (
    <>
    <div className={s.container}>
      <div className = {`${s.registration}`}>

    Восстановление пароля

      <Input
        type={'email'}
        placeholder={'Укажите e-mail'}
        onChange={onChange}
        value={value.email}
        name={'email'}
        error={false}
        ref={inputRef}
        onIconClick={onIconClick}
        errorText={'Ошибка'}
        size={'default'}
      />

      <Button type="primary" size="large">
        <Link to='/reset-password'>
          Восстановить
        </Link>
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

export default LoginPage;
