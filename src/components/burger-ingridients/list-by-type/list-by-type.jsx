import React from 'react';
import IngridientCard from '../ingridient-card/ingridient-card'

import listByTypeStyles from './list-by-type.module.css'
import Element from './element'

const ListByType = (props) => {


  return (
    <>
      <ul className={listByTypeStyles.list_by_type}>
          {
          props.data.map((item) => (
            <Element item={item} onClick={props.onClick}/>
          ))
          }
      </ul>
    </>
    
  );
}

export default ListByType;
