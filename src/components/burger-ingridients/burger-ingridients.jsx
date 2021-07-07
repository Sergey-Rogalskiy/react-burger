import React, { useEffect } from 'react';
import {
  Tab
} from '@ya.praktikum/react-developer-burger-ui-components'
import ListByType from './list-by-type/list-by-type'
import PropTypes from 'prop-types';

import { useSelector, useDispatch  } from 'react-redux'

import burgerIngridientsStyles from './burger-ingridients.module.css'

const BurgerIngridients = (props) => {

  const items = useSelector(state => state.ingridients.items)

  const [current, setCurrent] = React.useState('one')
  let data_buns = items.filter(obj1 => obj1.type === "bun");
  let data_sauces = items.filter(obj1 => obj1.type === "sauce");
  let data_mains = items.filter(obj1 => obj1.type === "main");
  
  const myRefScrollBuns = React.useRef(null)
  const myRefScrollSauces = React.useRef(null)
  const myRefScrollMains = React.useRef(null)
  const myRefScrollContainer = React.useRef(null)
  
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


  const handleScrollIngredients = () => {
    const bunsDis = myRefScrollBuns.current.getBoundingClientRect().top - myRefScrollContainer.current.getBoundingClientRect().top
    const saucesDis = myRefScrollSauces.current.getBoundingClientRect().top - myRefScrollContainer.current.getBoundingClientRect().top

    if (bunsDis>=-210) {
      setCurrent("one")
      return
    }
    if (saucesDis>=-485) {
      setCurrent("two")
    } else {
      setCurrent('three')
    }
  }

  return (
    <>
      <div style={{ display: 'flex' }} >
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
      <div  ref={myRefScrollContainer}
        className={burgerIngridientsStyles.overflow} 
        onScroll={handleScrollIngredients}
      >
        <div >
          <p ref={myRefScrollBuns}
            className={`${burgerIngridientsStyles.headers} text text_type_main-medium`}
          >
            Булки
          </p>
          <ListByType data={data_buns}
            onClick={props.modal.openModal}/>
        </div>
        <div >
          <p ref={myRefScrollSauces}
            className={`${burgerIngridientsStyles.headers} text text_type_main-medium`}>
           Соусы
          </p>
          
          <ListByType data={data_sauces}
            onClick={props.modal.openModal}/>
        </div>
        <div >
          <p ref={myRefScrollMains}
            className={`${burgerIngridientsStyles.headers} text text_type_main-medium`}>
            Начинки
          </p>
          
          <ListByType data={data_mains}
            onClick={props.modal.openModal}/>
        </div>
      </div>
    </>
  );
}

const modalType = PropTypes.shape({
  visible: PropTypes.bool,
  openModal: PropTypes.func,
  closeModal: PropTypes.func,
});

BurgerIngridients.propTypes = {
  modal: modalType.isRequired
}; 

export default BurgerIngridients;
