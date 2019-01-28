import React, { Component } from 'react';
import './css/Footer.css'

import PropTypes from 'prop-types'

class Footer extends Component {
  static PropTypes = {
    copyright: PropTypes.string
  };
  render() {
    const {copyright= 'Value-to-defect'} = this.props;
    return (
      <div className="Footer">
        <p> { copyright } </p>
      </div>
    );
  }
}

export default Footer;
