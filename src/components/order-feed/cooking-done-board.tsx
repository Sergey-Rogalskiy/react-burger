import { useSelector } from '../../types'
import { TOrder } from '../../types'
import s from './order-feed.module.css'
import Spinner from '../utils/loader'

export const CookingDoneBoard = () => {
	const allOrders = useSelector((state:any) => state.feed.wsFeedData.orders)
	let doneOrders: TOrder[]|null = null
	let doneOrders2: TOrder[]|null = null
	if (allOrders) {
		doneOrders = allOrders.filter((item:TOrder) => item.status === 'done').slice(0,10)
		doneOrders2 = allOrders.filter((item:TOrder) => item.status === 'done').slice(10,20)
	}
	let cookingOrders: TOrder[]|null = null
	let cookingOrders2: TOrder[]|null = null
	if (allOrders) {
		cookingOrders = allOrders.filter((item:TOrder) => item.status === 'pending').slice(0,10)
		cookingOrders2 = allOrders.filter((item:TOrder) => item.status === 'pending').slice(10,20)
	}
	
	const totalOrders = useSelector((state:any) => state.feed.wsFeedData.total)
	const todayOrders = useSelector((state:any)  => state.feed.wsFeedData.totalToday)


	return (
		<div className={`${s.overflow} p-3`} >
			<div className={`${s.flex_row}`}>
				<div className={`${s.done}`}>
					<h3 className="text text_type_main-medium mb-6">Готовы:</h3>
					<div className={`${s.list_inner}`}>
						<ul>
							{
								doneOrders ?
								doneOrders.map((item, index)=>(
									<li key={index} className={`${s.done_clr} text text_type_digits-default mb-2`}>
										{item.number}
									</li>
								)) :
								<Spinner/>
							}
						</ul>
						<ul>
							{
								doneOrders2 ?
								doneOrders2.map((item, index)=>(
									<li key={index} className={`${s.done_clr} text text_type_digits-default mb-2`}>
										{item.number}
									</li>
								)) :
								<Spinner/>
							}
						</ul>
					</div>
				</div>
				<div className={s.done}>
					<h3 className="text text_type_main-medium mb-6">В работе:</h3>
					<div className={`${s.list_inner}`}>
						<ul>
							{
								cookingOrders ?
								cookingOrders.map((item, index)=>(
									<li key={index} className="text text_type_digits-default mb-2">
										{item.number}
									</li>
								)):
								<Spinner/>
							}
						</ul>
						<ul>
							{
								cookingOrders2 ?
								cookingOrders2.map((item, index)=>(
									<li key={index} className="text text_type_digits-default mb-2">
										{item.number}
									</li>
								)):
								<Spinner/>
							}
						</ul>
					</div>
				</div>
			</div>
			<div>
				<h3 className="text text_type_main-medium">Выполнено за все время:</h3>
				{
					totalOrders 
					? <p className={`${s.shinny_clr} text text_type_digits-large`}>{totalOrders}</p>
					: <Spinner/>
				}
				
			</div>
			<div>
				<h3 className="text text_type_main-medium">Выполнено за сегодня:</h3>
				{
					todayOrders 
					? <p className={`${s.shinny_clr} text text_type_digits-large`}>{todayOrders}</p>
					: <Spinner/>
				}
				
			</div>
		</div>
	);
}

