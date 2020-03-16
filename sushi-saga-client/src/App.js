import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"



class App extends Component {

  state = {
    sushis: []
  }

  componentDidMount(){
    fetch("http://localhost:3000/sushis")
    .then(response => response.json())
    .then(response =>{
      this.setState({
        sushis: response
      })
    })
  }

  render() {
    return (
      <div className="app">
        <SushiContainer sushis={this.state.sushis.slice(0,4)}/>
        <Table />
      </div>
    );
  }
}

export default App;