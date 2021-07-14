import { FC } from 'react'
import {Logo, BurgerIcon, ListIcon, ProfileIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import { NavLink, useLocation, } from "react-router-dom"
import s from './app-header.module.css'
import { useSelector } from '../../types'

const AppHeader: FC = () => {
  const {pathname} = useLocation()
  const user = useSelector(state => state.registration.user)
  return (
    <header className={s.header}>
      <div className={s.header__inner}>
        <nav className={s.nav}>
            <NavLink className={s.nav__link} activeClassName={s.active} to="/" exact>
              <BurgerIcon type={(pathname === "/") ? "primary" : "secondary"} />
              <span className='p-2'>Конструктор</span>
            </NavLink>
            <NavLink className={s.nav__link} activeClassName={s.active} to="/feed">
              <ListIcon type={(pathname === "/feed") ? "primary" : "secondary"}  />
              <span className='p-2'>Лента заказов</span>
            </NavLink>
        </nav>

        <div className={s.header__logo}>
          <Logo />
        </div>

          <nav className={s.nav}>
              <NavLink className={s.nav__link} activeClassName={s.active} to="/profile">
                  <ProfileIcon type={(pathname === "/profile") ?  "primary" : "secondary"}  />
                  <span className='p-2'>
                    {
                      user ? user.name : 'Личный кабинет'
                    }
                  </span>
              </NavLink>
          </nav>
    </div>
    </header>
  );
}

export default AppHeader;
