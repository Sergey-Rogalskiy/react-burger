import {Element} from "./element/element"
import {useHistory, useRouteMatch, useLocation } from 'react-router-dom'
import { TOrder } from '../../types'
import Spinner from '../utils/loader'

import s from './order-feed.module.css'

type TProps = {
  orders: TOrder[]|null;
  modal: any
}
export const OrderFeed = (props: TProps) => {
  const {path} = useRouteMatch();
  const history = useHistory();
  const location = useLocation();
  const wsFeedData = props.orders

  const clickOrder = (e: any, item: TOrder) => {
    const order = { type: 'order', item : item}
    props.modal.openModal(e, order)
    history.push( {pathname: `${path}/${item.number}`,
      state: { background: location }})
  }

  return (
    <>
      <div className={s.overflow} >
        <ul >
            {
            wsFeedData 
            ? wsFeedData.map((item, index) => (
              <div 
                key={index}  
                onClick={(e) => {clickOrder(e, item)}}>
                <Element 
                  data={item}/>
              </div>
            ))
            :
            <div>
              <Spinner/>
            </div>
            }
        </ul>
      </div>
    </>
  );
}

