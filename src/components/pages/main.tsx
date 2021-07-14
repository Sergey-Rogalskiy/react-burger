import { FC } from 'react';
import BurgerConstructor from '../burger-constructor/burger-constructor'
import BurgerIngridients from '../burger-ingridients/burger-ingridients'

import s from './pages.module.css'

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

type TProps = {
  // modal: {openModal: () => {};}
  // modal: {openModal: (e: any, order: any) => {}}
  // modal:{openModal: (e: any, order: any) => {}};
  
  // modal: (e: any, item: any) => void;
  modal: any;
}

const MainPage: FC<TProps> = (props) => {
  
  
  return (
    <>
      <div className={s.container}>
        <div className={s.column}>
          <p className="text text_type_main-large">
            Соберите бургер
          </p>
        </div>
      </div>
      
      <DndProvider backend={HTML5Backend}>
        <div className={`${s.row}`}>
          <div className={`${s.column} ${s.left}`}>
            <BurgerIngridients
              modal={props.modal}/>
          </div>
          <div className={`${s.column} ${s.right}`} id='burger_constructor'>
            <BurgerConstructor 
              modal={props.modal}/>
          </div>
        </div>
      </DndProvider>
    </>
  );
}

export default MainPage;
