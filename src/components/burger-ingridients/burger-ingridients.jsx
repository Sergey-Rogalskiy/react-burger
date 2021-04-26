import React from 'react';
import {
  Tab
} from '@ya.praktikum/react-developer-burger-ui-components'

import burgerIngridientsStyles from './burger-ingridients.module.css'

import ListByType from './list-by-type/list-by-type'


function BurgerIngridients(props) {
  const [current, setCurrent] = React.useState('one')
  let data_buns = props.data.filter(obj1 => obj1.type === "bun");
  let data_sauces = props.data.filter(obj1 => obj1.type === "sauce");
  let data_mains = props.data.filter(obj1 => obj1.type === "main");
  
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
      <div className={burgerIngridientsStyles.overflow}>
        <div>
          <p className="text text_type_main-large">
            Булки
          </p>
          <ListByType data={data_buns}/>
        </div>
        <div>
          <p className="text text_type_main-large">
           Соусы
          </p>
          
          <ListByType data={data_sauces}/>
        </div>
        <div>
          <p className="text text_type_main-large">
            Начинки
          </p>
          
          <ListByType data={data_mains}/>
        </div>
      </div>
      
    </div>
  );
}

export default BurgerIngridients;
