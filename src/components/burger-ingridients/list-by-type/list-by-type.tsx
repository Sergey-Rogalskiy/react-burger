import { FC } from 'react';
import listByTypeStyles from './list-by-type.module.css'
import Element from './element'
import { TIngredient } from '../../../types';

type TProps = {
  data: TIngredient[];
  // onClick: {openModal: (e: any, item: any) => void}
  onClick: any;
}

const ListByType: FC<TProps> = (props) => {
  return (
    <>
      <ul className={listByTypeStyles.list_by_type}>
          {
          props.data.map((item, index) => (
            <div key={index}>
            <Element 
              item={item} 
              onClick={props.onClick}/>
            </div>
          ))
          }
      </ul>
    </>
    
  );
}

export default ListByType;
