import WeatherApi from 'api/modules/WeatherApi';

// Constants
const WEATHER_LOAD_REQUEST = 'WEATHER_LOAD_REQUEST';
const WEATHER_LOAD_SUCCESS = 'WEATHER_LOAD_SUCCESS';
const WEATHER_LOAD_FAIL = 'WEATHER_LOAD_FAIL';

// Actions
export function loadCityWeather(cityName) {
  return {
    types: [WEATHER_LOAD_REQUEST, WEATHER_LOAD_SUCCESS, WEATHER_LOAD_FAIL],
    payload: cityName,
    promise: () => WeatherApi.getCityWeather(cityName)
  }
}

//Reducer
const initialState = {
  current: null,
  storage: [],
  request: false,
  error: ''
};

export function weather(state = initialState, action) {
  switch (action.type) {
    case WEATHER_LOAD_REQUEST:
      return {
        ...state,
        request: true,
        error: null
      };
    case WEATHER_LOAD_SUCCESS:
      const newStorage = state.storage.slice();
      newStorage.push(action.result);
      return {
        ...state,
        current: action.result,
        storage: newStorage,
        request: false
      };
    case WEATHER_LOAD_FAIL:
      return {
        ...state,
        request: false,
        error: action.error
      };
    default:
      break;
  }

  return state;
}
