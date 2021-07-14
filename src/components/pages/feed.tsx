import { useEffect, FC } from 'react';
import {
  OrderFeed,
  CookingDoneBoard
} from '../order-feed/index'
import { wsInitAction } from '../../services/actions/feed';
import { useSelector, useDispatch } from '../../types'

import s from './pages.module.css'

type TProps = {
  modal: any
}

export const FeedPage: FC<TProps> = (props) => {
  const dispatch = useDispatch()
  const wsFeedData = useSelector(state => state.feed.wsFeedData.orders)

  useEffect(
    () => {
        dispatch(wsInitAction())
    }, [] 
  );
  

  return (
    <>
      <div className={s.container}>
        <div className={s.column}>
          {/* <div onClick={() => socket.send('test')}>Click me!!!</div> */}
          <p className="text text_type_main-large">
            Лента заказов
          </p>
        </div>
      </div>
  
      <div className={`${s.row}`}>
        <div className={`${s.column} ${s.left}`}>
          <OrderFeed modal={props.modal} orders={wsFeedData}/>  
        </div>
        <div className={`${s.column} ${s.right}`}>
          <CookingDoneBoard />
        </div>
      </div>
    </>
  );
}
export default FeedPage