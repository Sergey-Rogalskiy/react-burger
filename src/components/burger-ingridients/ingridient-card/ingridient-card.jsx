import PropTypes from 'prop-types';
import {
  Counter, 
  CurrencyIcon, 
} from '@ya.praktikum/react-developer-burger-ui-components'

import ingridientCardStyles from './ingridient-card.module.css'

function IngridientCard(props) {
  return(
    <div>
      <div style={{position: 'relative'}}>
        <Counter count={10}/>
      </div>
      <img src={props.data.image} alt="burger" />
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

IngridientCard.propTypes = {
  item: PropTypes.string
}; 

export default IngridientCard