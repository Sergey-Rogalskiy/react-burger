import React from 'react';
import {
  Tab
} from '@ya.praktikum/react-developer-burger-ui-components'
import ListByType from './list-by-type/list-by-type'
import Modal from '../modal/modal'
import IngridientDetails from '../ingridient-details/ingridient-details'

import PropTypes from 'prop-types';

import burgerIngridientsStyles from './burger-ingridients.module.css'


const BurgerIngridients = (props) => {

  const [visible, setVisible] = React.useState(false)
  const [ingridient, setIngridient] = React.useState(false)
  const openModal = (item) => {
      setIngridient(item)
      setVisible(true)
  }
  const closeModal = () => {
      setVisible(false)
  }

  const modal = (
    <Modal header="Детали ингридента" onClose={closeModal}> 
      <IngridientDetails data={ingridient}/>
    </Modal>
);

React.useEffect(() => {
  document.addEventListener("keyup", handleKeyUp);

  return () => {
    document.removeEventListener("keyup", handleKeyUp);
  }
}, []);
  
const handleKeyUp = (e) => {
  const keys = {
    27: () => {
      e.preventDefault();
      closeModal();
      window.removeEventListener('keyup', handleKeyUp, false);
    },
  };

  if (keys[e.keyCode]) { keys[e.keyCode](); }
}

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
          <ListByType data={data_buns}
            onClick={openModal}/>
        </div>
        <div ref={myRefScrollSauces}>
          <p className={`${burgerIngridientsStyles.headers} text text_type_main-medium`}>
           Соусы
          </p>
          
          <ListByType data={data_sauces}
            onClick={openModal}/>
        </div>
        <div ref={myRefScrollMains}>
          <p className={`${burgerIngridientsStyles.headers} text text_type_main-medium`}>
            Начинки
          </p>
          
          <ListByType data={data_mains}
            onClick={openModal}/>
        </div>
      </div>
      {visible && modal}
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
