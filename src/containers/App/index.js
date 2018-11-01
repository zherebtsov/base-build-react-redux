import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SearchForm } from 'components/SearchForm';
import { TableWeather } from 'components/TableWeather';
import { Spinner } from 'components/Spinner';
import { loadCityWeather } from 'redux/modules/weather';

function mapStateToProps(state) {
  return {
    weatherList: state.weather.storage,
    errorWeatherLoad: state.weather.error,
    requestWeatherLoad: state.weather.request
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadCityWeather: cityName => dispatch(loadCityWeather(cityName))
  };
}

class App extends Component {

  render() {
    return (
      <div>
        <SearchForm submit={this.props.loadCityWeather} error={this.props.errorWeatherLoad} />
        <Spinner request={this.props.requestWeatherLoad}>
          <TableWeather list={this.props.weatherList} />
        </Spinner>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
