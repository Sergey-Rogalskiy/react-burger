import React from 'react';
import {
  Input,
} from '@ya.praktikum/react-developer-burger-ui-components'

import { useSelector  } from 'react-redux'



export const ProdileEdit = () => {

  const data = useSelector(state => state.registration.user)
  
  const [value, setValue] = React.useState(data)
  const onChange = e => {
    setValue({...value, [e.target.name]: e.target.value})
  }
  
  // useEffect(() => {
  //   dispatch(getItems())
  // }, [dispatch])

  return (
    <>
    <Input
      type={'text'}
      placeholder={'Имя'}
      onChange={e => onChange(e)}
      icon={'EditIcon'}
      value={value.name}
      name={'name'}
      error={false}
      errorText={'Ошибка'}
      size={'default'} />

    <Input
      type={'text'}
      placeholder={'E-mail'}
      onChange={e => onChange(e)}
      icon={'EditIcon'}
      value={value.email}
      name={'email'}
      error={false}
      errorText={'Ошибка'}
      size={'default'} />

    <Input
      type={'text'}
      placeholder={'Пароль'}
      onChange={e => onChange(e)}
      icon={'EditIcon'}
      value={value.password}
      name={'password'}
      error={false}
      errorText={'Ошибка'}
      size={'default'} />
    </>
  );
}

