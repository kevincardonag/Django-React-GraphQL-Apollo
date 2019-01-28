// Dependences
import React, { Component } from 'react';

// Componets
import Header from './Global/Header'
import Content from './Global/Content'
import Footer from './Global/Footer'

// Data
import items from '../data/menu.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="MiFirstApp" items={items}/>
        <Content/>
        <Footer copyright="&copy; React-2019 "/>
      </div>
    );
  }
}

export default App;
