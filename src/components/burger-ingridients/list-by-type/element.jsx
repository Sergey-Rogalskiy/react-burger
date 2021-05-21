import React from 'react';
import IngridientCard from '../ingridient-card/ingridient-card'

import listByTypeStyles from './list-by-type.module.css'
import { useDrag } from "react-dnd";

const ListByType = (props) => {
const item = props.item

const [, dragRef] = useDrag({
    type: "ingridients",
    item: item,
    collect: monitor => ({
        isDrag: monitor.isDragging()
    })
});

  return (
    <li key={item._id} 
    className={listByTypeStyles.card}
    onClick={(item) => props.onClick(item)}
    ref={dragRef}>
        <IngridientCard data={item} />
    </li>
  );
}

export default ListByType;
