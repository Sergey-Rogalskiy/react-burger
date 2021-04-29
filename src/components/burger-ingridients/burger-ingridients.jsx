import React from 'react';
import {
  Tab
} from '@ya.praktikum/react-developer-burger-ui-components'

import burgerIngridientsStyles from './burger-ingridients.module.css'

import ListByType from './list-by-type/list-by-type'


const BurgerIngridients = (props) => {
  const [current, setCurrent] = React.useState('one')
  let data_buns = props.data.filter(obj1 => obj1.type === "bun");
  let data_sauces = props.data.filter(obj1 => obj1.type === "sauce");
  let data_mains = props.data.filter(obj1 => obj1.type === "main");
  
  const myRefScrollBuns = React.useRef(null)
  const myRefScrollSauces = React.useRef(null)
  const myRefScrollMains = React.useRef(null)

  const executeScrollBuns = () => {
    myRefScrollBuns.current.scrollIntoView()
    setCurrent("one")
  }    

  const executeScrollSauces = () => {
    myRefScrollSauces.current.scrollIntoView()
    setCurrent("two")
  }    

  const executeScrollMains = () => {
    myRefScrollMains.current.scrollIntoView()
    setCurrent('three')

  }    

  return (
    <>
      <div style={{ display: 'flex' }}>
        <Tab value="one" active={current === 'one'} onClick={executeScrollBuns}>
          Булки
        </Tab>
        <Tab value="two" active={current === 'two'} onClick={executeScrollSauces}>
          Соусы
        </Tab>
        <Tab value="three" active={current === 'three'} onClick={executeScrollMains}>
          Начинки
        </Tab>
      </div>
      <div className={burgerIngridientsStyles.overflow}>
        <div  ref={myRefScrollBuns}>
          <p className={`${burgerIngridientsStyles.headers} text text_type_main-medium`}>
            Булки
          </p>
          <ListByType data={data_buns}/>
        </div>
        <div ref={myRefScrollSauces}>
          <p className={`${burgerIngridientsStyles.headers} text text_type_main-medium`}>
           Соусы
          </p>
          
          <ListByType data={data_sauces}/>
        </div>
        <div ref={myRefScrollMains}>
          <p className={`${burgerIngridientsStyles.headers} text text_type_main-medium`}>
            Начинки
          </p>
          
          <ListByType data={data_mains}/>
        </div>
      </div>
      
    </>
  );
}

export default BurgerIngridients;
