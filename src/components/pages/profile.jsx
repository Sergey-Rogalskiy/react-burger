

import {
  OrderFeed,
} from '../order-feed/index'

import {ProdileEdit} from '../profile'


import {  Switch, Route,NavLink, Redirect  } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {useHistory } from 'react-router-dom'
import {getLogout} from '../../services/actions/registration'

import s from './pages.module.css'

export default function ProfilePage() {
  const user = useSelector(state => state.registration.user)
  const refreshToken = useSelector(state => state.registration.refreshToken)
  const history = useHistory();
  const dispatch = useDispatch();

  const exit = (e) => {
    e.preventDefault()
    // history.replace({pathname: '/'})
    dispatch(getLogout(refreshToken))
  }
  
  if (!user) {
    return <Redirect to='/login'/>
  }
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
