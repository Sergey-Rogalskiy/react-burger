import React, {FC} from 'react';
import {
  Tab
} from '@ya.praktikum/react-developer-burger-ui-components'
import ListByType from './list-by-type/list-by-type'
import { useSelector, useDispatch } from '../../types'
import { TIngredient } from '../../types';
import {tabSwitchAction} from '../../services/actions/ingridients'

import burgerIngridientsStyles from './burger-ingridients.module.css'

type TProps = {
  modal: {openModal: () => void}
}

const BurgerIngridients: FC<TProps> = (props) => {
  const dispatch = useDispatch()
  const items = useSelector(state => state.ingridients.items)
  const current = useSelector(state => state.ingridients.currentTab)
  
  let data_buns = items.filter((obj1: TIngredient)=> obj1.type === "bun");
  let data_sauces = items.filter((obj1: TIngredient) => obj1.type === "sauce");
  let data_mains = items.filter((obj1: TIngredient) => obj1.type === "main");
  
  const myRefScrollBuns = React.useRef<HTMLDivElement>(null)
  const myRefScrollSauces = React.useRef<HTMLDivElement>(null)
  const myRefScrollMains = React.useRef<HTMLDivElement>(null)
  const myRefScrollContainer = React.useRef<HTMLDivElement>(null)
  
  const executeScrollBuns = () => {
    if (myRefScrollBuns.current ) {
      myRefScrollBuns.current.scrollIntoView()
      dispatch(tabSwitchAction("buns"))
    }
  }      

  const executeScrollSauces = () => {
    if (myRefScrollSauces.current ) {
      myRefScrollSauces.current.scrollIntoView()
      dispatch(tabSwitchAction("sauces"))
    }
  }    

  const executeScrollMains = () => {
    if (myRefScrollMains.current ) {
      myRefScrollMains.current.scrollIntoView()
      dispatch(tabSwitchAction("mains"))
    }
  }    


  const handleScrollIngredients = () => {
    let bunsDis
    let saucesDis
    if (myRefScrollBuns.current && myRefScrollContainer.current) {
      bunsDis = myRefScrollBuns.current.getBoundingClientRect().top - myRefScrollContainer.current.getBoundingClientRect().top
    
    }
    if (myRefScrollSauces.current && myRefScrollContainer.current) {
      saucesDis = myRefScrollSauces.current.getBoundingClientRect().top - myRefScrollContainer.current.getBoundingClientRect().top
    
    }
    if (bunsDis && bunsDis>=-210) {
      dispatch(tabSwitchAction("buns"))
      return
    }
    if (saucesDis && saucesDis>=-485) {
      dispatch(tabSwitchAction("sauces"))
    } else {
      dispatch(tabSwitchAction("mains"))
    }
  }

  return (
    <>
      <div style={{ display: 'flex' }} >
        <Tab value="one" active={current === 'buns'} onClick={executeScrollBuns}>
          Булки
        </Tab>
        <Tab value="two" active={current === 'sauces'} onClick={executeScrollSauces}>
          Соусы
        </Tab>
        <Tab value="three" active={current === 'mains'} onClick={executeScrollMains}>
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
            onClick={props.modal}/>
        </div>
        <div >
          <p ref={myRefScrollSauces}
            className={`${burgerIngridientsStyles.headers} text text_type_main-medium`}>
           Соусы
          </p>
          
          <ListByType data={data_sauces}
            onClick={props.modal}/>
        </div>
        <div >
          <p ref={myRefScrollMains}
            className={`${burgerIngridientsStyles.headers} text text_type_main-medium`}>
            Начинки
          </p>
          
          <ListByType data={data_mains}
            onClick={props.modal}/>
        </div>
      </div>
    </>
  );
}


export default BurgerIngridients;
