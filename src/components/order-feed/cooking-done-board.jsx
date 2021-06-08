import { useSelector, useDispatch  } from 'react-redux'
import {getItems} from "../../services/actions/ingridients"

import s from './order-feed.module.css'

export const CookingDoneBoard = (props) => {

	const doneOrders = useSelector(state => state.feed.doneOrders)
	const cookingOrders = useSelector(state => state.feed.cookingOrders)
  const totalOrders = useSelector(state => state.feed.totalOrders)
  const todayOrders = useSelector(state => state.feed.todayOrders)
  const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(getItems())
  // }, [dispatch])

  return (
    <>
			<div className={s.overflow} >
				<div className={s.flex_row}>
					<div className={s.done}>
							<h3>Готовы:</h3>
							<ul>
								{
										doneOrders.map((item)=>(
												<li>{item}</li>

										))
								}
							</ul>
					</div>
					<div className={s.done}>
							<h3>В работе:</h3>
							<ul>
								{
										cookingOrders.map((item)=>(
												<li>{item}</li>

										))
								}
							</ul>
							
              </div>
          </div>
          <div>
            <h3>Выполнено за все время:</h3>
            <p>{totalOrders}</p>
          </div>
          <div>
            <h3>Выполнено за сегодня:</h3>
            <p>{todayOrders}</p>
          </div>
      </div>
    </>
  );
}

