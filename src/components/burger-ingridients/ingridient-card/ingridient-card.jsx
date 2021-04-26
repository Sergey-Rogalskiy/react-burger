import PropTypes from 'prop-types';
import {
  Counter, 
  CurrencyIcon, 
} from '@ya.praktikum/react-developer-burger-ui-components'

function IngridientCard(props) {
  return(
    <div>
      <div style={{position: 'relative'}}>
        <Counter count={10}/>
      </div>
      <img src={props.data.image} alt="burger" />
      <p>
        {props.data.price}
        <CurrencyIcon type="primary" />
      </p>
      <p>
        {props.data.name}
      </p>
    </div>

  )
}

IngridientCard.propTypes = {
  item: PropTypes.string
}; 

export default IngridientCard