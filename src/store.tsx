import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './services/reducers';
import { socketMiddleware } from './services/socket-midleware' 
import { socketMiddlewareAuth } from './services/socket-midleware-auth';

const composeEnhancers =
  typeof window === 'object' && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose; 
    
const enhancer = composeEnhancers(applyMiddleware(socketMiddleware(), socketMiddlewareAuth(), thunk));

export type RootState = ReturnType<typeof store.getState>;
export const store = createStore(rootReducer, enhancer);