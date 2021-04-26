import {
  Counter, 
  CurrencyIcon, 
} from '@ya.praktikum/react-developer-burger-ui-components'

import IngridientCard from '../ingridient-card/ingridient-card'

import listByTypeStyles from './list-by-type.module.css'

const ListByType = (props) => {
  return (
    <ul className={listByTypeStyles.list_by_type}>
        {
        props.data.map((item) => (
          <li className={listByTypeStyles.card}>
            <IngridientCard data={item}>
            </IngridientCard>
          </li>
        ))
        }
    </ul>
  );
}

export default ListByType;
