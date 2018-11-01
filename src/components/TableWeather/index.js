import React, { Component } from 'react';
import './style.css';
import PropTypes from 'prop-types';
import { WeatherModel } from 'models/WeatherModel';
import { Utils } from 'utils';

export class TableWeather extends Component {

  static defaultProps = {
    list: [new WeatherModel({})]
  };

  renderRow = (list) => {
    if (Utils.isEmptyArray(list)) {
      return (
        <tr><td colSpan="5" className="text-align_center">Нет данных</td></tr>
      );
    }
    return list.map((item, index) => {
      return (
        <tr key={`${index}_${item.cityName}`}>
          <td>{item.cityName}</td>
          <td>{item.country}</td>
          <td>{item.temp}</td>
          <td>{item.pressure}</td>
          <td>{item.humidity}</td>
        </tr>
      );
    })
  };

  render() {
    return (
      <table className="table-weather" cellSpacing="0">
        <thead>
          <tr>
            <th>Город</th>
            <th>Страна</th>
            <th>Температура</th>
            <th>Влажность</th>
            <th>Давление</th>
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
