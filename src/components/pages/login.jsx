import React from 'react'
import {
  Input,
  PasswordInput,
  Button
} from '@ya.praktikum/react-developer-burger-ui-components'
import { Link, Redirect } from "react-router-dom"
import {getLogin} from '../../services/actions/registration'
import {useDispatch} from 'react-redux'
import { useSelector } from '../../types'
import Spinner from '../utils/loader'

import s from './pages.module.css'

function LoginPage() {
  const dispatch = useDispatch()
  const loginFailed = useSelector(state => state.registration.loginFailed)
  const loginRequest = useSelector(state => state.registration.loginRequest)
  const user = useSelector(state => state.registration.user)
  
  const [value, setValue] = React.useState({email: '', password: '', })
  const onChange = e => {
    setValue({...value, [e.target.name]: e.target.value})
  }
  
  const enterClick = (e) => {
    e.preventDefault()
    dispatch(getLogin(value))
  }

  if (user) {
    return (
      <div className = {`${s.container} `}>
        <div className = {`${s.registration}`}>
         <p className="text text_type_main-medium m-3 mt-15">
          <Redirect to='/'/>
         </p>
        </div>
      </div>
    )
  }

  
  if (loginRequest) {
    return (
      <div className = {`${s.container} `}>
          <Spinner/>
      </div>
    )
  }

  
  
  return (
    <div className = {`${s.container} `}>
      <div className = {`${s.registration}`}>

       <p className="text text_type_main-medium m-3 mt-15">
        Вход
       </p>
        {
          (loginFailed) ? (
            <p className={`${s.text_color_error} text text_type_main-default m-3 colors-interface-error`}>
              {(loginFailed.message)}
            </p>
          ) : (
            <p className={`${s.text_color_error} text text_type_main-default m-3 colors-interface-error`}>
              {(loginFailed.message)}
            </p>
          )
        }

  <form onSubmit={(e) => enterClick(e)}>
        <Input
          type={'text'}
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
        
        <Button 
          type="primary" 
          size="large" >
            Войти
        </Button>
        </form>
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
  );
}

export default LoginPage;
