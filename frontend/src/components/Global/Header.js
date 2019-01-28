import React, { Component } from 'react';
import logo from './imagenes/logo.svg';
import './css/Header.css';
import PropTypes from 'prop-types';

class Header extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired
  };
  render() {
    const {title, items} = this.props;

    return (
      <div className="Header">
        <header className="Logo">
          <img src={logo}  alt="logo" />
          <p>
            {title}
          </p>
          <ul className='Menu'>
            {items && items.map((item, key) => <li id={key}> {item.title} </li>)}
          </ul>

          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
          </a>
        </header>
      </div>
    );
  }
}

export default Header;
