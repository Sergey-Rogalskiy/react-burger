import { TFeedActions} from './services/actions/feed';
import { TConstructorActions } from './services/actions/constructor';
import { TRegistrationActions } from './services/actions/registration';
import { TIngredientActions } from './services/actions/ingridients';
import { store } from './store';
import { ThunkAction } from 'redux-thunk';
import { Action, ActionCreator } from 'redux';
import {
  TypedUseSelectorHook,
  useSelector as selectorHook,
  useDispatch as dispatchHook,
} from 'react-redux';

export const useSelector: TypedUseSelectorHook<RootState> = selectorHook; 
export const useDispatch = () => dispatchHook<AppDispatch | AppThunk>(); 

export type RootState = ReturnType<typeof store.getState>;

export type TOrderByID = {
  success: boolean,
  orders:TOrder[],
}

export type TWsGetMessage = {
  orders: TOrder[],
  total:number,
  totalToday:number
}
export type TLoginResponse = {
  accessToken: string,
  refreshToken: string,
  success: boolean,
  user: TUser
}
export type TPatchUserResponse = {
  success: boolean,
  user: TUser
}

export type TForgotPasswordData = {
  success: boolean,
  message: string
}
export type TUser = {
  name: string, 
  email: string,
  password?: string
}

export type TUserLogin = {
  email: string,
  password: string
}
export type TOrderlementModal = {
  item:TOrder,
  type:string,
}
export type TElementModal = {
  item:TIngredient,
  type:string,
}
export type TDropIngredient = {
  item:TIngredient,
  index:number,
}

type TOwner = {
  name:string,
  email:string,
  createdAt:string,
  updatedAt:string,
}

type TOrderRequest = {
  _id:string,
  owner:TOwner,
  status:string,
  name:string,
  createdAt:string,
  updatedAt:string,
  number:number,
  price:number
}

export type TOrderResponse = {
  success:true,
  name: string,
  order: TOrderRequest
}
export type TCurrentItemToView = {
  type: 'order' | 'ingridient',
  item: TIngredient | TOrder | null | undefined
}

export type TChosenBuns = {
  price: number; 
  name:string;
  image:string
  _id:string
}

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
    ingredients: Array<string>
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
    image:string
    calories: number
    proteins:number
    fat:number
    carbohydrates?: number
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
