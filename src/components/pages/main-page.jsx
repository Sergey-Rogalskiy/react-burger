import React from 'react'

import BurgerConstructor from '../burger-constructor/burger-constructor'
import BurgerIngridients from '../burger-ingridients/burger-ingridients'

import mainPageStyles from './main-page.module.css'

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function MainPage(props) {
  
  return (
    <>
      <div className={mainPageStyles.row}>
        <div className={mainPageStyles.column}>
          <p className="text text_type_main-large">
            Соберите бургер
          </p>
        </div>
      </div>
      
      <DndProvider backend={HTML5Backend}>
        <div className={`${mainPageStyles.row}`}>
          <div className={`${mainPageStyles.column} ${mainPageStyles.left}`}>
            <BurgerIngridients
              modal={props.modal}/>
          </div>
          <div className={`${mainPageStyles.column} ${mainPageStyles.right}`}>
            <BurgerConstructor 
              modal={props.modal}/>
          </div>
        </div>
      </DndProvider>
    </>
  );
}

export default MainPage;
