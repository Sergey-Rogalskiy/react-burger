import React from 'react';
import logo from '../../logo.svg';
import appStyles from './app.module.css';

import AppHeader from '../app-header/app-header'
import BurgerConstructor from '../burger-constructor/burger-constructor'
import BurgerIngridients from '../burger-ingridients/burger-ingridients'

function App() {
  return (
    <>
      <AppHeader/>
      <BurgerConstructor/>
      <BurgerIngridients/>
    </>
  );
}

export default App;
