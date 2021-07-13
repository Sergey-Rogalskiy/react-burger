import {useRef} from 'react';
import {
  ConstructorElement, 
  DragIcon, 
} from '@ya.praktikum/react-developer-burger-ui-components'
import { useDispatch  } from 'react-redux'
import { useDrop, useDrag } from "react-dnd";
import {
  DELETE_ITEM_FROM_CONSTRUCTOR,
  CHANGE_ORDER_OF_ITEMS_IN_CONSTRUCTOR
} from "../../services/actions/constructor"
import { TIngredient } from '../../types';

import burgerConstructorStyles from './burger-constructor.module.css'

type TProps = {
  item: TIngredient;
  index: number
}

const Ingridient = (props: TProps) => {
  
  const moveCard = (dragIndex: number, hoverIndex: number) => {
    dispatch({
      type: CHANGE_ORDER_OF_ITEMS_IN_CONSTRUCTOR,
      dragIndex,
      hoverIndex
    });
  }
  const item = props.item
  const index = props.index
  
  const dispatch = useDispatch();

  const ref = useRef(null);

  const [, dropRef] = useDrop({
    accept: "choosen",
    drop(item: any) {
      if (!ref.current) {
          return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) {
          return;
      }
      moveCard(dragIndex, hoverIndex);
    },
});
  
  const [{ isDragging }, drag] = useDrag({
      type: "choosen",
      item: () => {
          return { item, index };
      },
      collect: (monitor) => ({
          isDragging: monitor.isDragging(),
      }),
  });

  drag(dropRef(ref));
  const opacity = isDragging ? 0.5 : 1;

  const style = {
    cursor: 'move',
};
  return (
      <div 
        ref={ref} 
        key={index} 
        className={` ${burgerConstructorStyles.center}  pb-2`}
        style={{ ...style, opacity }}
      >
        <DragIcon type="primary" />
        <ConstructorElement
          text={item.name}
          thumbnail={item.image}
          price={item.price}
          handleClose={
            () => {
              dispatch({
                type: DELETE_ITEM_FROM_CONSTRUCTOR,
                index,
              })
            }
          }/>
        </div>
  );
}

export default Ingridient;