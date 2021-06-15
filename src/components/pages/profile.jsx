

import {
  OrderFeed,
} from '../order-feed/index'

import {ProdileEdit} from '../profile'


import {  Switch, Route,NavLink  } from 'react-router-dom';

import s from './pages.module.css'

export default function ProfilePage() {
  
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
          <NavLink  
          to='/login' 
          className={`${s.sidebar__link} text text_type_main-medium text_color_inactive m-3`}
           activeClassName={s.active}>
            Выход
          </NavLink >
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
