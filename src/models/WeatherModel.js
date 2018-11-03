import { CommonModel } from 'models/CommonModel';

export class WeatherModel extends CommonModel{
  cityName = '';
  country = '';
  temp = 0;
  pressure = 0;
  humidity = 0;

  constructor(props) {
    super(props);
    if (this.checkObjectKey(props)) {
      this.cityName = this.setStringParam(props.name);
      this.country = this.checkObjectKey(props, 'sys') ? this.setStringParam(props.sys.country) : '';

      if (this.checkObjectKey(props, 'main')) {
        this.temp = this.convertTempKelvinsToCelsius(this.setNumberParam(props.main.temp));
        this.pressure = this.setNumberParam(props.main.pressure);
        this.humidity = this.setNumberParam(props.main.humidity);
      }
    }
  }

  convertTempKelvinsToCelsius = (tempKelvins) => {
    return Math.round((tempKelvins - 273.15) * 100) / 100;
  }
}
