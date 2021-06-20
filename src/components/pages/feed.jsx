import { ProfileOrdersPage } from '.';
import {
  OrderFeed,
  CookingDoneBoard
} from '../order-feed/index'

import s from './pages.module.css'

export default function FeedPage(props) {
  return (
    <>
      <div className={s.container}>
        <div className={s.column}>
          <p className="text text_type_main-large">
            Лента заказов
          </p>
        </div>
      </div>
  
      <div className={`${s.row}`}>
        <div className={`${s.column} ${s.left}`}>
          <OrderFeed modal={props.modal}/>  
        </div>
        <div className={`${s.column} ${s.right}`}>
          <CookingDoneBoard />
        </div>
      </div>
    </>
  );
}
