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
  const item = items.find(el => el._id === id)
  console.log(item)
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(getItems())
  }, [dispatch])

  const modal = (  
    <Modal header={"Детали ингридента"}> 
    {
      <IngridientDetails currentItemToView={item}/>
    }
    </Modal>
  );
  
  return (
    <>
    <div className={s.container}>
      {modal}
      </div>
    </>
  );
}

export default LoginPage;
