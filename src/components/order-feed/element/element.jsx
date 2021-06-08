import React, { useEffect } from 'react';
import {
  Tab
} from '@ya.praktikum/react-developer-burger-ui-components'
import PropTypes from 'prop-types';

import { useSelector, useDispatch  } from 'react-redux'

import s from '../order-feed.module.css'

export const Element = (props) => {

  // const items = useSelector(state => state.ingridients.items)
  // const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(getItems())
  // }, [dispatch])

  return (
    <>
      <li key={props.key} 
        className={s.card}>
          <div className={s.flex_row}>
            <p>#{props.data._id}</p>
            <p>{props.data.time}</p>
          </div>
        <p>{props.data.name}</p>
        
        <div className={s.flex_row}>
          <div className={s.flex_row}>
            
            {
              props.data.ingridients.map((item, index) => (
                <>
                  <img className={s.img} src={item.image} alt="-" />
                </>
              ))
            }
          </div>
          <p>{props.data.price} SB</p>
        </div>
      
      </li>
    </>
  );
}

