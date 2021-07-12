

import { useSelector  } from 'react-redux'

import {Element} from "./element/element"
import {useHistory, useRouteMatch, useLocation } from 'react-router-dom'

import s from './order-feed.module.css'

export const OrderFeed = (props) => {
  const {path} = useRouteMatch();
  const history = useHistory();
  const location = useLocation();
  const feedRequest = useSelector(state => state.feed.feedRequest)
  const wsFeedData = props.orders


  
  if (feedRequest) {
    return <p>LOADING</p>
  }
  const clickOrder = (e, item) => {
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
            <div>Loading...</div>
            }
        </ul>
      </div>
    </>
  );
}

