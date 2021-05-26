import {useRef} from 'react';
import {
  ConstructorElement, 
  DragIcon, 
} from '@ya.praktikum/react-developer-burger-ui-components'


import { useDispatch  } from 'react-redux'

import { useDrop, useDrag } from "react-dnd";
import {
  DELETE_ITEM_FROM_CONSTRUCTOR,
} from "../../services/actions/app"

import burgerConstructorStyles from './burger-constructor.module.css'

const Ingridient = (props) => {
  const item = props.item
  const index = props.index
  const moveCard = props.moveCard
  
  const dispatch = useDispatch();

  const ref = useRef(null);

  const [{ handlerId }, dropRef] = useDrop({
    accept: "choosen",
    collect(monitor) {
        return {
            handlerId: monitor.getHandlerId(),
        };
    },
    hover(item, monitor) {
        if (!ref.current) {
            return;
        }
        const dragIndex = item._id;
        const hoverIndex = index;
        // Don't replace items with themselves
        if (dragIndex === hoverIndex) {
            return;
        }
        // Determine rectangle on screen
        const hoverBoundingRect = ref.current?.getBoundingClientRect();
        // Get vertical middle
        const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
        // Determine mouse position
        const clientOffset = monitor.getClientOffset();
        // Get pixels to the top
        const hoverClientY = clientOffset.y - hoverBoundingRect.top;
        // Only perform the move when the mouse has crossed half of the items height
        // When dragging downwards, only move when the cursor is below 50%
        // When dragging upwards, only move when the cursor is above 50%
        // Dragging downwards
        if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
            return;
        }
        // Dragging upwards
        if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
            return;
        }
        // Time to actually perform the action
        moveCard(dragIndex, hoverIndex);
        // Note: we're mutating the monitor item here!
        // Generally it's better to avoid mutations,
        // but it's good here for the sake of performance
        // to avoid expensive index searches.
        item._id = hoverIndex;
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
        data-handler-id={handlerId}
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