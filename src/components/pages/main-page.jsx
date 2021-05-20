import React from 'react'

import BurgerConstructor from '../burger-constructor/burger-constructor'
import BurgerIngridients from '../burger-ingridients/burger-ingridients'

import mainPageStyles from './main-page.module.css'

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
    </>
  );
}

export default MainPage;
