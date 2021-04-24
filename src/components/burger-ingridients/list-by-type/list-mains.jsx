import {
  Counter, 
  CurrencyIcon, 
} from '@ya.praktikum/react-developer-burger-ui-components'

import listByTypeStyles from './list-by-type.module.css'

const ListByType = (props) => {
  let obj = props.data.filter(obj1 => obj1.type === "main");
  return (
    <ul className={listByTypeStyles.list_by_type}>
        {
        obj.map((item) => (
          <li className={listByTypeStyles.card}>
            <img src={item.image} alt="burger" />
            <div>
              {item.price}
              <CurrencyIcon type="primary" />
            </div>
            <div>
              {item.name}
            </div>
            <Counter count={10}/>
          </li>
        ))
        }
    </ul>
  );
}

export default ListByType;
