import {
  Logo, 
  BurgerIcon, 
  ListIcon,
  ProfileIcon
} from '@ya.praktikum/react-developer-burger-ui-components'

import appHeaderStyles from './app-header.module.css'

function AppHeader() {
  return (
    <header className={appHeaderStyles.header}>
      <div className={appHeaderStyles.button}>
          <BurgerIcon type="primary"/>
        <span>
          Конструктор
        </span>
      </div>

      <div className={appHeaderStyles.button}>
          <ListIcon type="primary" />
        <span>
          Лента заказов
        </span>
      </div>

      <div className={appHeaderStyles.button}>
        <Logo />
      </div>
      
      <div className={appHeaderStyles.button}>
          <ProfileIcon type="primary" />
        <span>
          Личный кабинет
        </span>
      </div>

    </header>
  );
}

export default AppHeader;
