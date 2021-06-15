
import {
  CurrencyIcon
} from '@ya.praktikum/react-developer-burger-ui-components'

import s from '../order-feed.module.css'

export const Element = (props) => {

  // const items = useSelector(state => state.ingridients.items)
  // const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(getItems())
  // }, [dispatch])

  return (
    <>
      <li 
        className={`${s.card} m-1`}>
        <div className={s.flex_row}>
          <p className="text text_type_digits-default pt-3">#{props.data._id}</p>
          <p className="text text_type_main-default text_color_inactive pt-3">{props.data.time}</p>
        </div>
        <p className="text text_type_main-medium pt-3">{props.data.name}</p>
        
        <div className={s.flex_row}>
            <ul className={s.images}>
              {
                props.data.ingridients.map((item, index) => (
                  <li  key={index} className={`${s.round}`}>
                    <img className={s.img} src={item.image} alt="-" />
                  </li>
                ))
              }
            </ul>
            <div className={s.flex_center}>
              <span className="text text_type_main-medium p-2">
                {props.data.price}
              </span> 
              <CurrencyIcon type="primary" />
            </div>
        </div>
      </li>
    </>
  );
}

