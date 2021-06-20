

import { useSelector  } from 'react-redux'

import {Element} from "./element/element"
import {useHistory, useRouteMatch, useLocation } from 'react-router-dom'

import s from './order-feed.module.css'

export const OrderFeed = (props) => {
  const {path} = useRouteMatch();
  const history = useHistory();
  const location = useLocation();
  const feedData = useSelector(state => state.feed.feedData)
  const feedRequest = useSelector(state => state.feed.feedRequest)
  
  if (feedRequest) {
    return <p>LOADING</p>
  }
  const clickOrder = (e, item) => {
    const order = { type: 'order', item : item}
    props.modal.openModal(e, order)
    history.push( {pathname: `${path}/${item._id}`,
      state: { background: location }})
  }

  return (
    <>
      <div className={s.overflow} >
        <ul >
            {
            feedData.map((item, index) => (
              <div 
                key={index}  
                onClick={(e) => {clickOrder(e, item)}}>
                <Element 
                  data={item}/>
              </div>
            ))
            }
        </ul>
      </div>
    </>
  );
}

