import React from 'react'
import {
  Input,
  PasswordInput,
  Button
} from '@ya.praktikum/react-developer-burger-ui-components'
import { Link } from "react-router-dom"

import {useDispatch, useSelector} from 'react-redux'
import {getRegister} from '../../services/actions/registration'

import {useHistory, useLocation} from 'react-router-dom'

import {
  OrderFeed,
  CookingDoneBoard
} from '../order-feed/index'

import {ProdileEdit} from '../profile'


import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import s from './pages.module.css'

export default function ProfilePage() {
  const history = useHistory();
  // console.log(history)
  const lcoation = useLocation();
  console.log(lcoation)

  const dispatch = useDispatch()
  const data = useSelector(state => state.registration.user)
  
  const [value, setValue] = React.useState(data)
  const onChange = e => {
    setValue({...value, [e.target.name]: e.target.value})
  }
  
  return (
    <>
      <div className={s.container}>
        <div className={s.column}>
          <p className="text text_type_main-large">
          </p>
        </div>
      </div>

      <div className={`${s.row}`}>
        <div className={`${s.column} ${s.left} ${s.flex_column} ml-10`}>
          
          <Link 
            to='/profile' 
            className={`${s.sidebar__link} text text_type_main-medium text_color_inactive m-3`}
            activeClassName="text text_type_main-medium m-3">
              Профиль
          </Link>
          <Link 
            to='/profile/orders' 
            className={`${s.sidebar__link} text text_type_main-medium text_color_inactive m-3`}
           activeClassName="text text_type_main-medium m-3">
              История Заказов
          </Link>
          <Link 
          to='/login' 
          className={`${s.sidebar__link} text text_type_main-medium text_color_inactive m-3`}
           activeClassName="text text_type_main-medium m-3">
            Выход
          </Link>
          <p 
            className="text text_type_main-default text_color_inactive m-3">
              В этом разделе вы можете изменить свои персональные данные
          </p>
        </div>

        <div className={`${s.column} ${s.right}`}>
          
            <Switch>
              <Route path="/profile" exact>
                <ProdileEdit />
              </Route>
              <Route path="/profile/orders" exact>
               <OrderFeed listType='profile'/>  
              </Route>
              <Route>
                Watt?
              </Route>
            </Switch>
        </div>
      </div>
    </>
  );
}
