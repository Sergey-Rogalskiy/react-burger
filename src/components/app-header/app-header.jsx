import {
  Logo, 
  BurgerIcon, 
  ListIcon,
  ProfileIcon
} from '@ya.praktikum/react-developer-burger-ui-components'
import { Link } from "react-router-dom"

import s from './app-header.module.css'

function AppHeader() {
  return (
<>
    <header className={s.header}>
      <div className={s.container}>
        <div className={s.header__inner}>

          <div>
            <nav className={s.nav}>
            <Link className={s.nav__link} to=".">
                  <BurgerIcon type="primary"/>
                  <span>
                    Конструктор
                  </span>
                </Link>
                <Link className={s.nav__link} to="/order">
                  <ListIcon type="primary" />
                  <span>
                    Лента заказов
                  </span>
                </Link>
            </nav>
          </div>

          <div className={s.header__logo}>
            <Logo />
          </div>

          <div>
            <nav className={s.nav}>
                <Link className={s.nav__link} to="/login">
                    <ProfileIcon type="primary" />
                    <span>
                      Личный кабинет
                    </span>
                </Link>
            </nav>
          </div>

        </div>
      </div>
    </header>

    
    <div>
      <span>
      </span>
    </div>
    

    </>
  );
}

export default AppHeader;
