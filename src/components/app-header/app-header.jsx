import {Logo, BurgerIcon, ListIcon, ProfileIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import { NavLink } from "react-router-dom"
import s from './app-header.module.css'

function AppHeader() {
  return (
    <header className={s.header}>
      <div className={s.header__inner}>
        <nav className={s.nav}>
            <NavLink className={s.nav__link} to=".">
              <BurgerIcon type="primary"/>
              <span>Конструктор</span>
            </NavLink>
            <NavLink className={s.nav__link} to="/feed">
              <ListIcon type="primary" />
              <span>Лента заказов</span>
            </NavLink>
        </nav>

        <div className={s.header__logo}>
          <Logo />
        </div>

          <nav className={s.nav}>
              <NavLink className={s.nav__link} to="/profile">
                  <ProfileIcon type="primary" />
                  <span>
                    Личный кабинет
                  </span>
              </NavLink>
          </nav>
    </div>
    </header>
  );
}

export default AppHeader;
