

import { useSelector  } from 'react-redux'

import {Element} from "./element/element"
import {useHistory, useRouteMatch } from 'react-router-dom'

import s from './order-feed.module.css'

export const OrderFeed = () => {
  const {path} = useRouteMatch();
  const history = useHistory();
  const feedData = useSelector(state => state.feed.feedData)
  const feedRequest = useSelector(state => state.feed.feedRequest)
  
  if (feedRequest) {
    return <p>LOADING</p>
  }

  return (
    <>
      <div className={s.overflow} >
        <ul >
            {
            feedData.map((item, index) => (
              <div 
              key={index}  
              onClick={() => {
                history.push(`${path}/${item._id}`)
              }}>
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

