import React from 'react';
import s from './pages.module.css'
import { useDispatch, useSelector } from 'react-redux';
import {useParams} from 'react-router-dom'
import {getItems} from "../../services/actions/ingridients"
import IngridientDetails from '../ingridient-details/ingridient-details'
import { TIngredient } from '../../types';

function IngridientsIdPage() {

  const items = useSelector((state:any) => state.ingridients.items)
  const {id}: any= useParams()
  const temp = items.find((el:TIngredient) => el._id === id)
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
          <IngridientDetails currentItemToView={currentItemToView}/>
      </div>
    </>
  );
}

export default IngridientsIdPage;
