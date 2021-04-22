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
      <span>
        <BurgerIcon type="primary"/>
        Конструктор
      </span>
      <span>
        <ListIcon type="primary" />
        Лента заказов
      </span>
      <Logo />
      <span>
        <ProfileIcon type="primary" />
        Личный кабинет
      </span>
    </header>
  );
}

export default AppHeader;
