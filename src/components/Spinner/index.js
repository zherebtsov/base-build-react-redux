import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css';

export class Spinner extends Component{
  render() {
    if (!this.props.request) {
      return (this.props.children);
    }
    return (
      <div className="spinner-container">
        <div className="spinner"/>
      </div>
    );
  }
}

Spinner.propTypes = {
  request: PropTypes.bool
};
