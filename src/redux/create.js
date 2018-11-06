import ReduxThunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import { RootReducer } from './reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import clientMiddleware from 'redux/middleware/clientMiddleware';

export default function (initialState) {

  const middlewares = [
    ReduxThunk,
    clientMiddleware()
  ];

  const composeEnhancer = process.env.REACT_APP_CONFIG === 'dev' ? composeWithDevTools : compose;

  return createStore(
    RootReducer,
    initialState,
    composeEnhancer(
      applyMiddleware(...middlewares)
    )
  );
}
