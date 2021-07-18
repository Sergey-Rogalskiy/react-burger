import { FC } from 'react';
import {
  Counter, 
  CurrencyIcon, 
} from '@ya.praktikum/react-developer-burger-ui-components'
import { useSelector } from '../../../types'
import { TIngredient } from '../../../types';

import ingridientCardStyles from './ingridient-card.module.css'


type TProps = {
  data: TIngredient;
}

const IngridientCard: FC<TProps> = (props) => {

  const chosenItems = useSelector(state => state.burgerConstructor.chosenItems)
  const chosenBuns = useSelector(state => state.burgerConstructor.chosenBuns)
  var counter = 0
  if ( props.data.type === 'bun'){
    if (chosenBuns) {
    counter = chosenBuns._id === props.data._id ? 1 : 0
    }
  } else {
    if (chosenItems) {
      counter = chosenItems.filter((item: TIngredient) => item._id === props.data._id).length
    } 
  }
  
  return(
    <div>
      <div style={{position: 'relative'}}>
        {
          counter !== 0 
          ? 
          <Counter count={counter}/> 
          : ""
        }
      </div>
      <img className={ingridientCardStyles.img} src={props.data.image} alt="burger" />
      <div className={ingridientCardStyles.total}>
        <span className="text text_type_digits-default">
          {props.data.price}
        </span> 
        <CurrencyIcon type="primary" />
      </div>

      <p className="text text_type_main-default">
        {props.data.name}
      </p>

    </div>

  )
}

export default IngridientCard