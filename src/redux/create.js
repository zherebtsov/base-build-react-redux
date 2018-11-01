import ReduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { RootReducer } from './reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import clientMiddleware from 'redux/middleware/clientMiddleware';

export default function (initialState) {
  const middlewares = [
    ReduxThunk,
    clientMiddleware()
  ];

  return createStore(
    RootReducer,
    initialState,
    composeWithDevTools(
      applyMiddleware(...middlewares)
    )
  );
}
