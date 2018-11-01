import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
      <form onSubmit={this.onSubmit}>
        <input type="text" placeholder="Название города" onChange={this.onChange} value={this.state.cityName} required/>
        <button type="submit">Найти</button>
        <p>{this.state.errorMessage}</p>
      </form>
    );
  }
}

SearchForm.propTypes = {
  submit: PropTypes.func,
  error: PropTypes.string
};
