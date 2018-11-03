import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css';

export class SearchForm extends Component {

  componentDidUpdate(prevProps) {
    if (this.props.error !== prevProps.error) {
      this.setState(state => {
        return {
          ...state,
          errorMessage: this.props.error
        };
      });
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      cityName: '',
      errorMessage: ''
    };
  }

  onSubmit = (evt) => {
    evt.preventDefault();
    this.props.submit(this.state.cityName);
    this.setState(state => {
      return {
        ...state,
        cityName: ''
      };
    });
  };

  onChange = (evt) => {
    this.setState({
      cityName: evt.target.value
    });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit} className="app__search search">
        <label className="search__label" htmlFor="city">Enter the name of the city</label><br/>
        <input
          id="city"
          type="text"
          placeholder="for example London"
          onChange={this.onChange}
          value={this.state.cityName}
          className="search__input"
          required
        />
        <button type="submit" className="search__button">Search</button>
        <p className="search__error">{this.state.errorMessage}</p>
      </form>
    );
  }
}

SearchForm.propTypes = {
  submit: PropTypes.func,
  error: PropTypes.string
};
