import React from 'react'
import {
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
    setTimeout(() => inputRef.current.focus(), 0)
    alert('Icon Click Callback')
  }
  
  
  return (
    <>
    <div className = {`${s.container} `}>
      <div className = {`${s.registration}`}>

       <p className="text text_type_main-medium m-3 mt-15">
        Вход
       </p>

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

        <p className="text text_type_main-default text_color_inactive m-3 mt-15">
          Вы — новый пользователь? 
          <Link to='/register' className={s.link}>
            Зарегистрироваться
          </Link>
        </p>
        
        <p className="text text_type_main-default text_color_inactive m-3">
          Забыли пароль? 
          <Link to='/forgot-password' className={s.link}>
            Восстановить пароль
          </Link> 
        </p>
      </div>
      </div>
    </>
  );
}

export default LoginPage;
