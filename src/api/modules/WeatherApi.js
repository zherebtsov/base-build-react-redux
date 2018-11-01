import ApiClient from 'api/ApiClient';
import FactoryModel from 'api/FactoryModel';
import { PATH_WEATHER } from 'api/constants';
import { WeatherModel } from 'models/WeatherModel';

export default class WeatherApi {
  static getCityWeather(cityName) {
    return (new ApiClient()).get(PATH_WEATHER, {'q': cityName})
      .then(FactoryModel.createHandlerModel(WeatherModel));
  }
}
