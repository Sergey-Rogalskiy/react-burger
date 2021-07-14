import { TFeedActions} from './services/actions/feed';
import { TConstructorActions } from './services/actions/constructor';
import { TRegistrationActions } from './services/actions/registration';
import { TIngredientActions } from './services/actions/ingridients';
import { store } from './store';
import { ThunkAction } from 'redux-thunk';
import { Action, ActionCreator } from 'redux';

export type RootState = ReturnType<typeof store.getState>;
 
export type TAppActions = 
TFeedActions |
TConstructorActions |
TRegistrationActions|
TIngredientActions;

export type AppThunk<TReturn = void> = ActionCreator<
  ThunkAction<TReturn, Action, RootState, TAppActions>
>; 
export type AppDispatch = typeof store.dispatch; 
  
 export type TIngredient = {
    calories: number
    carbohydrates?: number
    fat:number
    image:string
    image_large:string
    image_mobile:string
    name:string
    price:number
    proteins:number
    type:string
    __v:number
    _id: string
    key?: number
  }

export type TOrder = {
    status: string
    _id: string
    number: number | string
    id:number
    ingredients: Array<string>
    name: string
    createdAt: string
    price:number
  }

export  type TLocationItem = {
    hash: string
    key: string
    pathname: string
    search: string
    state: null
  }
export  type TLocation = {
    hash: string
    key: string
    pathname: string
    from: TLocationItem
    search: string
    state: { background: TLocationItem } | null
    background: TLocationItem
  }
