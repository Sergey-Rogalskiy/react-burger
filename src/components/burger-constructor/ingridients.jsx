
import {  useDispatch  } from 'react-redux'

import {
  CHANGE_ORDER_OF_ITEMS_IN_CONSTRUCTOR
} from "../../services/actions/app"

import Ingridient from './ingridient' 

import burgerConstructorStyles from './burger-constructor.module.css'

const Ingridients = (props) => {
  const data = props
  const dispatch = useDispatch();
  
  const moveCard = (dragIndex, hoverIndex) => {
      dispatch({
        type: CHANGE_ORDER_OF_ITEMS_IN_CONSTRUCTOR,
        dragIndex,
        hoverIndex
      });
    }

  return (
    <>
      <div 
        className={`${burgerConstructorStyles.overflow}  
        ${burgerConstructorStyles.center}`}
      >
        {
          data.items[0]
          ?
          data.items.map((item, index) => 
            <Ingridient 
            item={item} 
            key={index}
            index={index}
            moveCard={moveCard}
          />
          )
          :
          <div>Ну хорош ломаться, дрэгни сюда свои булочки</div>
        }
      </div>
  </>
  );
}

export default Ingridients;