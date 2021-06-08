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

export default function ResetPage(props) {
  
  const [value, setValue] = React.useState({code: '', password: '', })
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

    <PasswordInput 
        onChange={onChange} 
        value={value.password} 
        name={'password'} />

      <Input
        type={'text'}
        placeholder={'Введите код из письма'}
        onChange={onChange}
        value={value.email}
        name={'code'}
        error={false}
        ref={inputRef}
        onIconClick={onIconClick}
        errorText={'Ошибка'}
        size={'default'}
      />

      <Button type="primary" size="large">
        <Link to='/login'>
          Сохранить
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

