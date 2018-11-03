import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { WeatherModel } from 'models/WeatherModel';
import { Utils } from 'utils';
import './style.css';

export class TableWeather extends Component {

  static defaultProps = {
    list: [new WeatherModel({})]
  };

  renderRow = (list) => {
    if (Utils.isEmptyArray(list)) {
      return (
        <tr><td colSpan="5" className="text-align_center">No data</td></tr>
      );
    }
    return list.map((item, index) => {
      return (
        <tr key={`${index}_${item.cityName}`}>
          <td>{item.cityName}</td>
          <td>{item.country}</td>
          <td>{item.temp} °C</td>
          <td>{item.pressure} hpa</td>
          <td>{item.humidity} %</td>
        </tr>
      );
    })
  };

  render() {
    return (
      <table className="app__table table-weather" cellSpacing="0">
        <thead>
          <tr>
            <th>City</th>
            <th>Country</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          {this.renderRow(this.props.list)}
        </tbody>
      </table>
    );
  }
}

TableWeather.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      cityName: PropTypes.string,
      country: PropTypes.string,
      temp: PropTypes.number,
      pressure: PropTypes.number,
      humidity: PropTypes.number
    })
  )
};
