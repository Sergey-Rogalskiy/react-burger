import {Logo, BurgerIcon, ListIcon, ProfileIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import { NavLink, useLocation, useRouteMatch, useHistory, useParams } from "react-router-dom"
import s from './app-header.module.css'

function AppHeader() {
  const {pathname} = useLocation()
  console.log(pathname)
  return (
    <header className={s.header}>
      <div className={s.header__inner}>
        <nav className={s.nav}>
            <NavLink className={s.nav__link} activeClassName={s.active} to="." exact>
              <BurgerIcon type={(pathname === "/") ? "primary" : "secondary"} />
              <span>Конструктор</span>
            </NavLink>
            <NavLink className={s.nav__link} activeClassName={s.active} to="/feed">
              <ListIcon type={(pathname === "/feed") ? "primary" : "secondary"}  />
              <span>Лента заказов</span>
            </NavLink>
        </nav>

        <div className={s.header__logo}>
          <Logo />
        </div>

          <nav className={s.nav}>
              <NavLink className={s.nav__link} activeClassName={s.active} to="/profile">
                  <ProfileIcon type={(pathname === "/profile") ?  "primary" : "secondary"}  />
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
