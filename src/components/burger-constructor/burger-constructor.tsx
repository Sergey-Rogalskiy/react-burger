

import { useSelector, useDispatch  } from 'react-redux'
import FixedBun from './fixed-bun'
import Ingridients from './ingridients'
import TotalPrice from './total-price'

import { useDrop } from "react-dnd";
import {
  ADD_ITEM_TO_CONSTRUCTOR,
} from "../../services/actions/constructor"


type TProps = {
  // modal: {openModal: () => {}}
  modal: any;
}

const BurgerConstructor = (props: TProps) => {

//   const {constructorState} = React.useContext(CurrentIngridientsContext);
//  const data =constructorState
  
  const chosenItems = useSelector((state: any) => state.burgerConstructor.chosenItems)
  const chosenBuns = useSelector((state: any) => state.burgerConstructor.chosenBuns)
 
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
      <FixedBun buns={chosenBuns} type="top"/>
      <Ingridients items={chosenItems}/>
      <FixedBun buns={chosenBuns} type="bottom"/>
      <TotalPrice modal={props.modal}/>
    </div>
  );
}



export default BurgerConstructor;
