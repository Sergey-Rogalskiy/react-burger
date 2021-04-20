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
      <BurgerIcon type="primary"/>
      <ListIcon type="primary" />
      <Logo />
      <ProfileIcon type="primary" />

    </header>
  );
}

export default AppHeader;
