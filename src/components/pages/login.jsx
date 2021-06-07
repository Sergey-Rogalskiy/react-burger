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



import s from './pages.module.css'

function LoginPage() {
  
  const [value, setValue] = React.useState('bob@example.com')
  const onChange = e => {
    setValue(e.target.value)
  }
  
  const inputRef = React.useRef(null)
  const onIconClick = () => {
    setTimeout(() => inputRef.current.focus(), 0)
    alert('Icon Click Callback')
  }
  return (
    <>
      <div className={s.container}>

        Вход

        <Input
          type={'text'}
          placeholder={'placeholder'}
          onChange={e => setValue(e.target.value)}
          value={value}
          name={'name'}
          error={false}
          ref={inputRef}
          onIconClick={onIconClick}
          errorText={'Ошибка'}
          size={'default'}
        />

        <PasswordInput onChange={onChange} value={value} name={'password'} />
        
        <Button type="primary" size="large">
            Войти
        </Button>

        Вы — новый пользователь? Зарегистрироваться
        Забыли пароль? Восстановить пароль
      </div>
    </>
  );
}

export default LoginPage;
