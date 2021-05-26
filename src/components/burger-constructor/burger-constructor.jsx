
import PropTypes from 'prop-types';
import { useSelector, useDispatch  } from 'react-redux'
import FixedBun from './fixed-bun'
import Ingridients from './ingridients'
import TotalPrice from './total-price'

import { useDrop } from "react-dnd";
import {
  ADD_ITEM_TO_CONSTRUCTOR,
} from "../../services/actions/constructor"

const BurgerConstructor = (props) => {

//   const {constructorState} = React.useContext(CurrentIngridientsContext);
//  const data =constructorState
  
  const items = useSelector(state => state.burgerConstructor.chosenItems)
  const buns = useSelector(state => state.burgerConstructor.chosenBuns)
 
  const dispatch = useDispatch();
  
  const [ ,drop] = useDrop({
    accept: "ingridients",
    drop(item) {
      dispatch({
            type: ADD_ITEM_TO_CONSTRUCTOR,
            item,
        });
    },
  });
  return (
    <div ref={drop} >
      <FixedBun buns={buns} type="top"/>
      <Ingridients items={items}/>
      <FixedBun buns={buns} type="bottom"/>
      <TotalPrice modal={props.modal}/>
    </div>
  );
}

const modalType = PropTypes.shape({
  visible: PropTypes.boolean,
  openModal: PropTypes.function,
  closeModal: PropTypes.function,
});

BurgerConstructor.propTypes = {
  modal: modalType
}; 

export default BurgerConstructor;
