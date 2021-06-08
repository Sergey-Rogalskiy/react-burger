import React, { useEffect } from 'react';
import {
  Tab
} from '@ya.praktikum/react-developer-burger-ui-components'
import ListByType from './list-by-type/list-by-type'
import PropTypes from 'prop-types';

import { useSelector, useDispatch  } from 'react-redux'
import {getItems} from "../../services/actions/ingridients"
import {OrderFeed} from '../order-feed/order-feed'

import burgerIngridientsStyles from './burger-ingridients.module.css'

const BurgerIngridients = (props) => {

  const items = useSelector(state => state.ingridients.items)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getItems())
  }, [dispatch])

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

const ingridientPropTypes = PropTypes.shape({
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  proteins: PropTypes.number.isRequired,
  fat: PropTypes.number.isRequired,
  carbohydrates: PropTypes.number.isRequired,
  calories: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  image_mobile: PropTypes.string.isRequired,
  image_large: PropTypes.string.isRequired,
  __v: PropTypes.number.isRequired,
});

BurgerIngridients.propTypes = {
  data: PropTypes.arrayOf(ingridientPropTypes.isRequired)
}; 

export default BurgerIngridients;
