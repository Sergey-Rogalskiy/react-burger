
import listByTypeStyles from './list-by-type.module.css'
import Element from './element'

const ListByType = (props) => {
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
