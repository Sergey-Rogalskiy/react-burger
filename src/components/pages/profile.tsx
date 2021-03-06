import { useEffect } from 'react';
import { wsInitAuth } from '../../services/actions/feed';
import { useSelector  } from 'react-redux'

import {
  OrderFeed,
} from '../order-feed/index'

import {ProdileEdit} from '../profile'


import {  Switch, NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {getLogout} from '../../services/actions/registration'
import { ProtectedRoute } from '../protected-route/protected-route';

import s from './pages.module.css'

type TProps = {
  modal: any
}

export default function ProfilePage(props:TProps) {
  const refreshToken = localStorage.getItem('refreshToken')
  const dispatch = useDispatch();
  const wsFeedDataAuth = useSelector((state:any) => state.feed.wsFeedDataAuth?.orders)

  const exit = (e:any) => {
    e.preventDefault()
    dispatch(getLogout(refreshToken))
  }
  
  useEffect(
    () => {
        dispatch(wsInitAuth())
    }, [] 
  );
  
  return (
    <>
      <div className={s.container}>
      </div>

      <div className={`${s.row}`}>
        <div className={`${s.column} ${s.left} ${s.flex_column} ml-10`}>
          
          <NavLink  exact
            to='/profile' 
            className={`${s.sidebar__link} text text_type_main-medium text_color_inactive m-3`}
            activeClassName={s.active}>
              Профиль
          </NavLink >
          <NavLink  
            to='/profile/orders' 
            className={`${s.sidebar__link} text text_type_main-medium text_color_inactive m-3`}
            activeClassName={s.active}>
              История Заказов
          </NavLink >
          <div  
            onClick={exit} 
            className={`${s.sidebar__link} text text_type_main-medium text_color_inactive m-3`}>
            Выход
          </div >
          <p 
            className="text text_type_main-default text_color_inactive m-3">
              В этом разделе вы можете изменить свои персональные данные
          </p>
        </div>

        <div className={`${s.column} ${s.right}`}>
          
            <Switch>
              <ProtectedRoute path="/profile" exact>
                <ProdileEdit />
              </ProtectedRoute>
              <ProtectedRoute path="/profile/orders" exact>
               <OrderFeed  modal={props.modal} orders={wsFeedDataAuth}/>  
              </ProtectedRoute>
              <ProtectedRoute>
                Watt?
              </ProtectedRoute>
            </Switch>
        </div>
      </div>
    </>
  );
}
