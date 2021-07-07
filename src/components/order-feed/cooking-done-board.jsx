import { useSelector  } from 'react-redux'

import s from './order-feed.module.css'

export const CookingDoneBoard = (props) => {
	const allOrders = useSelector(state => state.feed.wsFeedData.orders)
	let doneOrders = ''
	let doneOrders2 = ''
	if (allOrders) {
		doneOrders = allOrders.filter(item => item.status === 'done').slice(0,10)
		doneOrders2 = allOrders.filter(item => item.status === 'done').slice(10,20)
	}
	let cookingOrders = ''
	let cookingOrders2 = ''
	if (allOrders) {
		cookingOrders = allOrders.filter(item => item.status === 'pending').slice(0,10)
		cookingOrders2 = allOrders.filter(item => item.status === 'pending').slice(10,20)
	}
	
	const totalOrders = useSelector(state => state.feed.wsFeedData.total)
	const todayOrders = useSelector(state => state.feed.wsFeedData.totalToday)


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
								<li>Loading</li>
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
								<li>Loading</li>
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
								<li>Loading</li>
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
								<li>Loadin</li>
							}
						</ul>
					</div>
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

