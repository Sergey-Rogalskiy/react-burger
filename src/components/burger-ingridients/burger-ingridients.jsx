import React from 'react';
import {
  Tab
} from '@ya.praktikum/react-developer-burger-ui-components'

import burgerIngridientsStyles from './burger-ingridients.module.css'

import ListBuns from './list-by-type/list-buns'
import ListMains from './list-by-type/list-mains'
import ListSauces from './list-by-type/list-sauces'


function BurgerIngridients(props) {
  const [current, setCurrent] = React.useState('one')
  
  return (
    <div className={burgerIngridientsStyles.burgerTypesMenu}>

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
          <p className="text text_type_main-default">
            Булки
          </p>
          <ListBuns data={props.data}/>
        </div>
        <div>
          <p className="text text_type_main-default">
           Соусы
          </p>
          
          <ListSauces data={props.data}/>
        </div>
        <div>
          <p className="text text_type_main-default">
            Начинки
          </p>
          
          <ListMains data={props.data}/>
        </div>
      </div>
      
    </div>
  );
}

export default BurgerIngridients;
