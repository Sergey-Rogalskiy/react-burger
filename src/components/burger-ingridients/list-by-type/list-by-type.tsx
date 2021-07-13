
import listByTypeStyles from './list-by-type.module.css'
import Element from './element'
import { TIngredient } from '../../../types';

type TProps = {
  data: TIngredient[];
  // onClick: {openModal: (e: any, item: any) => void}
  
  onClick: any;
}

const ListByType = (props: TProps) => {
  return (
    <>
      <ul className={listByTypeStyles.list_by_type}>
          {
          props.data.map((item, index) => (
            <Element 
              item={item} 
              key={ index} 
              onClick={props.onClick}/>
          ))
          }
      </ul>
    </>
    
  );
}

export default ListByType;
