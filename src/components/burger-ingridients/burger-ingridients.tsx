import React from 'react';
import {
  Tab
} from '@ya.praktikum/react-developer-burger-ui-components'

import burgerIngridientsStyles from './burger-ingridients.module.css'

import ListBuns from './list-by-type/list-buns'
import ListMains from './list-by-type/list-mains'
import ListSauces from './list-by-type/list-sauces'


function BurgerIngridients() {
  const [current, setCurrent] = React.useState('one')
  
  return (
    <div className={burgerIngridientsStyles.test_color}>

      <div style={{ display: 'flex' }}>
        <Tab value="one" active={current === 'one'} onClick={setCurrent}>
          Булки
        </Tab>
        <Tab value="two" active={current === 'two'} onClick={setCurrent}>
          Соусы
        </Tab>
        <Tab value="three" active={current === 'three'} onClick={setCurrent}>
          Начинки
        </Tab>
      </div>
      <div>
        <div>
          Булки
          <ListBuns/>
        </div>
        <div>
          Соусы
          <ListSauces/>
        </div>
        <div>
          Начинки
          <ListMains/>
        </div>
      </div>
      
    </div>
  );
}

export default BurgerIngridients;
