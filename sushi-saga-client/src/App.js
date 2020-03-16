import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"



class App extends Component {

  state = {
    sushis: [],
    platesArr: [],
    money: 20
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

  handleMoreSushi = () => {
    
  }

  handleEatSushi = (sushi) => {
    if(this.state.money - sushi.price > 0){
      let foundSushiIndex = this.state.sushis.findIndex(s => s.id === sushi.id)
      sushi.eaten = true
      let copyArr = [...this.state.sushis]
      copyArr[foundSushiIndex] = sushi
      this.setState({
        sushis: copyArr,
        platesArr: [...this.state.platesArr,1],
        money: this.state.money - sushi.price
      })
    } else {
      alert("This is America, if you are poor, you don't deserve to eat!")
    }
  }

  render() {
    return (
      <div className="app">
        <SushiContainer sushis={this.state.sushis.slice(0,4)}  handleMoreSushi={this.handleMoreSushi} handleEatSushi={s => this.handleEatSushi(s)}/>
        <Table plates={this.state.platesArr} money={this.state.money}/>
      </div>
    );
  }
}

export default App;