import { FC } from 'react';
import IngridientCard from '../ingridient-card/ingridient-card'
import listByTypeStyles from './list-by-type.module.css'
import { useDrag } from "react-dnd";
import { useLocation, useHistory } from 'react-router-dom'
import {TIngredient, TElementModal } from '../../../types'

type TProps = {
  item: TIngredient;
  onClick: {openModal: (e:React.MouseEvent, order:TElementModal) => void};
}

const ListByType: FC<TProps> = (props) => {
  const history = useHistory()
  const location = useLocation()
  const item = props.item
  

  const [, dragRef] = useDrag({
      type: "ingridients",
      item: item,
      collect: monitor => ({
          isDrag: monitor.isDragging()
      })
  });

  const clickIngridient = (e: React.MouseEvent) => {
    const order: TElementModal = { type: 'ingridient', item : item}
    props.onClick.openModal(e, order)
    history.push( {pathname: `/ingredients/${item._id}`,
      state: { background: location }})
  }

  return (
    <li
    className={listByTypeStyles.card}
    // onClick={(e) => props.onClick(e, item)}
    onClick={clickIngridient}
    ref={dragRef}>
        <IngridientCard data={item} />
    </li>
  );
}

export default ListByType;
