import React from 'react';
import {
  Input,
  Button
} from '@ya.praktikum/react-developer-burger-ui-components'

import {useDispatch, useSelector} from 'react-redux'
import {patchUser} from '../../services/actions/registration'
import {Redirect} from 'react-router-dom'



export const ProdileEdit = () => {
  const dispatch = useDispatch()

  const user = useSelector(state => state.registration.user)
  let data = {...user, password: ''}
  const [value, setValue] = React.useState(data)
  const onChange = e => {
    setValue({...value, [e.target.name]: e.target.value})
  }
  const cancel = e => {
    console.log('cancel - tbc')
  }
  const save = e => {
    e.preventDefault()
    dispatch(patchUser(value))
  }
  
  // useEffect(() => {
  //   dispatch(getItems())
  // }, [dispatch])
  if (!data) {
    return <Redirect to='/login' />
  }
  return (
    <form> onSubmit={(e) => save(e)}
    <Input
      type={'text'}
      placeholder={'Имя'}
      onChange={e => onChange(e)}
      icon={'EditIcon'}
      value={value?.name}
      name={'name'}
      error={false}
      errorText={'Ошибка'}
      size={'default'} />

    <Input
      type={'text'}
      placeholder={'E-mail'}
      onChange={e => onChange(e)}
      icon={'EditIcon'}
      value={value?.email}
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

    <Button type="secondary" onClick={cancel}>Отмена</Button>
    <Button>Сохранить</Button>
    </form>
  );
}

