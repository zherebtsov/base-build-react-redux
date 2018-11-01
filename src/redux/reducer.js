import { combineReducers } from 'redux';
import { weather } from 'redux/modules/weather';

export const RootReducer = combineReducers({
  weather: weather
});
