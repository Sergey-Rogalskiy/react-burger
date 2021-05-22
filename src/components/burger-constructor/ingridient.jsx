import React, {useRef} from 'react';
import {
  ConstructorElement, 
  DragIcon, 
  Button,
  CurrencyIcon, 
} from '@ya.praktikum/react-developer-burger-ui-components'

import PropTypes from 'prop-types';

import { useSelector, useDispatch  } from 'react-redux'

import { useDrop, useDrag } from "react-dnd";
import {
  ADD_ITEM_TO_CONSTRUCTOR,
  DELETE_ITEM_FROM_CONSTRUCTOR,
  CHANGE_ORDER_OF_ITEMS_IN_CONSTRUCTOR
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
        item.index = hoverIndex;
    },
    // drop(item) {
    //   dispatch({
    //         type: CHANGE_ORDER_OF_ITEMS_IN_CONSTRUCTOR,
    //         item,
    //     });
    // },
});
  
  const [{ isDragging }, dragRef] = useDrag({
      type: "choosen",
      item: () => {
          return { item, index };
      },
      collect: (monitor) => ({
          isDragging: monitor.isDragging(),
      }),
  });

  dragRef(dropRef(ref));

  return (
    <>
      <div ref={ref} key={item._id+Math.random()} className={` ${burgerConstructorStyles.center}  pb-2`}>
        <DragIcon type="primary" />
        <ConstructorElement
          text={item.name}
          thumbnail={item.image}
          price={item.price}
          handleClose={
            () => {
              dispatch({
                type: DELETE_ITEM_FROM_CONSTRUCTOR,
                item,
              })
            }
          }/>
        </div>
  </>
  );
}

export default Ingridient;