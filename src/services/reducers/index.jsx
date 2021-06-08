import { combineReducers } from 'redux';
import { ingridientsReducer } from './ingridients';
import {constructorReducer} from './constructor';
import {registrationReducer} from './registration';
import {feedReducer} from './feed';

export const rootReducer = combineReducers({
  burgerConstructor: constructorReducer,
  ingridients: ingridientsReducer,
  registration: registrationReducer,
  feed: feedReducer
});
