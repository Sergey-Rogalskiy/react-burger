import {
  Logo, 
  BurgerIcon, 
  ListIcon,
  ProfileIcon
} from '@ya.praktikum/react-developer-burger-ui-components'

import s from './app-header.module.css'

function AppHeader() {
  return (
<>
    <header className={s.header}>
      <div className={s.container}>
        <div className={s.header__inner}>
            <div className={s.header__logo}>
              <Logo />
            </div>

            <nav className={s.nav}>
                <a className={s.nav__link} href="#">
                  <BurgerIcon type="primary"/>
                  <span>
                    Конструктор
                  </span>
                </a>
                <a className={s.nav__link} href="#">
                  <ListIcon type="primary" />
                  <span>
                    Лента заказов
                  </span>
                </a>
                <a className={s.nav__link} href="#">
                    <ProfileIcon type="primary" />
                    <span>
                      Личный кабинет
                    </span>
                </a>
            </nav>
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
