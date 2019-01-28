import React, { Component } from 'react';
import './css/Content.css'

class Content extends Component {
  constructor(){
    super();
    this.state = {
      count: 0,
      number_one:0,
      number_two:0,
      result:0
    };
    this.handleCountClickthis = this.handleCountClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleResultClick = this.handleResultClick.bind(this)
  }
  componentDidMount() {
    this.setState({
      count:1
    })
  }
  handleCountClick(e) {
    if (e.target.id === 'add'){
      this.setState({
        count: this.state.count + 1
      })
    }else if(e.target.id === 'substract'){
      this.setState({
        count: this.state.count - 1
      })
    }else if(e.target.id === 'reset'){
      this.setState({
        count: 0
      })
    }
  };
  handleResultClick(e){
    this.setState({
      result: this.state.number_one + this.state.number_two
    })
  }
  handleInputChange(e){
    if(e.target.id === 'number1'){
      this.setState({
        number_one: Number(e.target.value)
      })
    }else{
      this.setState({
        number_two: Number(e.target.value)
      })
    }
  }
  render() {
    return (
      <div className="Content">
        <h1> counter {this.state.count} </h1>
        <button id="add" onClick={this.handleCountClick.bind(this)}> + </button>
        <button id="substract" onClick={this.handleCountClick.bind(this)}> - </button>
        <button id="reset" onClick={this.handleCountClick.bind(this)}>RESET</button>

      <h2> Calculator</h2>
      <input type="number" id="number1" value={this.state.number_one} onChange={this.handleInputChange}/> +
        <input type="number" id="number2" value={this.state.number_two} onChange={this.handleInputChange}/>

      <button id="result" onClick={this.handleResultClick}> = </button>
        <h4> Result {this.state.result} </h4>
      </div>
    );
  }
}

export default Content;
