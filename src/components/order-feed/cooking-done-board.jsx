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
<div className={`${s.overflow} p-3`} >
	<div className={`${s.flex_row}`}>
		<div className={`${s.done}`}>
			<h3 className="text text_type_main-medium mb-6">Готовы:</h3>
			<ul>
				{
					doneOrders.map((item)=>(
						<li className={`${s.done_clr} text text_type_digits-default mb-2`}>{item}</li>
					))
				}
			</ul>
		</div>
		<div className={s.done}>
			<h3 className="text text_type_main-medium mb-6">В работе:</h3>
			<ul>
				{
					cookingOrders.map((item)=>(
						<li className="text text_type_digits-default mb-2">{item}</li>
					))
				}
			</ul>
		</div>
	</div>
	<div>
		<h3 className="text text_type_main-medium">Выполнено за все время:</h3>
		<p className={`${s.shinny_clr} text text_type_digits-large`}>{totalOrders}</p>
	</div>
	<div>
		<h3 className="text text_type_main-medium">Выполнено за сегодня:</h3>
		<p className={`${s.shinny_clr} text text_type_digits-large`}>{todayOrders}</p>
	</div>
</div>
  );
}

