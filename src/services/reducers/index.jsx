import { combineReducers } from 'redux';
import { 
  ingridientsReducer
 } from './ingridients';
 import { 
   constructorReducer
  } from './constructor';

export const rootReducer = combineReducers({
  burgerConstructor: constructorReducer,
  ingridients: ingridientsReducer
});
