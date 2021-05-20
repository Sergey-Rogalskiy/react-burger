import React, { useEffect } from 'react';
import {
  Tab
} from '@ya.praktikum/react-developer-burger-ui-components'
import ListByType from './list-by-type/list-by-type'
import PropTypes from 'prop-types';

import { useSelector, useDispatch  } from 'react-redux'
import {getItems} from "../../services/actions/app"

import burgerIngridientsStyles from './burger-ingridients.module.css'


const BurgerIngridients = (props) => {

  const data = useSelector(state => state.app.items)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getItems())
  }, [])

  const [current, setCurrent] = React.useState('one')
  let data_buns = data.filter(obj1 => obj1.type === "bun");
  let data_sauces = data.filter(obj1 => obj1.type === "sauce");
  let data_mains = data.filter(obj1 => obj1.type === "main");
  
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
          <ListByType data={data_buns}
            onClick={props.modal.openModal}/>
        </div>
        <div ref={myRefScrollSauces}>
          <p className={`${burgerIngridientsStyles.headers} text text_type_main-medium`}>
           Соусы
          </p>
          
          <ListByType data={data_sauces}
            onClick={props.modal.openModal}/>
        </div>
        <div ref={myRefScrollMains}>
          <p className={`${burgerIngridientsStyles.headers} text text_type_main-medium`}>
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
