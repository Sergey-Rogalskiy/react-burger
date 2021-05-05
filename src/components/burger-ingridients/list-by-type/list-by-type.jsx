import React from 'react';
import IngridientCard from '../ingridient-card/ingridient-card'

import listByTypeStyles from './list-by-type.module.css'

const ListByType = (props) => {


  return (
    <>
      <ul className={listByTypeStyles.list_by_type}>
          {
          props.data.map((item) => (
            
            <li key={item._id} 
            className={listByTypeStyles.card}
            onClick={props.onClick.bind(null, item)}>
              <IngridientCard data={item} />
            </li>
          ))
          }
      </ul>
    </>
    
  );
}

export default ListByType;
