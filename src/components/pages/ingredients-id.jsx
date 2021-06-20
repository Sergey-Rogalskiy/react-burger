import React from 'react';
import s from './pages.module.css'
import { useDispatch, useSelector } from 'react-redux';
import {useParams} from 'react-router-dom'
import {getItems} from "../../services/actions/ingridients"
import IngridientDetails from '../ingridient-details/ingridient-details'
import Modal from '../modal/modal'

function LoginPage(props) {

  const items = useSelector(state => state.ingridients.items)
  const {id} = useParams()
  const temp = items.find(el => el._id === id)
  const currentItemToView = {
    type: 'ingridient',
    item: temp
  }
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(getItems())
  }, [dispatch])

  
  return (
    <>
     <div className={s.container}>
      <Modal header={"Детали ингридиента"}> 
          <IngridientDetails currentItemToView={currentItemToView}/>
      </Modal>
      </div>
    </>
  );
}

export default LoginPage;
