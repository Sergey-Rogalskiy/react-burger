import React, { useEffect } from 'react';
import {
  Tab,
} from '@ya.praktikum/react-developer-burger-ui-components'
import PropTypes from 'prop-types';

import { useSelector, useDispatch  } from 'react-redux'
import {getItems} from "../../services/actions/ingridients"

import {Element} from "./element/element"
import {useHistory, useLocation, useRouteMatch } from 'react-router-dom'

import s from './order-feed.module.css'

export const OrderFeed = (props) => {
  const {path} = useRouteMatch();
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch()
  const feedData = useSelector(state => state.feed.feedData)
  const feedRequest = useSelector(state => state.feed.feedRequest)
  const feedError = useSelector(state => state.feed.feedError)
  
  const onClick = () => {

  }
  // useEffect(() => {
  //   dispatch(getItems())
  // }, [dispatch])
  if (feedRequest) {
    return <p>LOADING</p>
  }

  return (
    <>
      <div className={s.overflow} >
        <ul >
            {
            feedData.map((item, index) => (
              <div onClick={(index) => {
                history.push(`${path}/${item._id}`)
                }}>
                <Element 
                key={index} 
                data={item}/>
              </div>
            ))
            }
        </ul>
      </div>
    </>
  );
}
