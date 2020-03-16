import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"



class App extends Component {

  state = {
    sushis: [],
    platesArr: [],
    money: 25,
    startSlice: 0,
    endSlice: 4

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
    this.setState({
      startSlice: this.state.startSlice + 4,
      endSlice: this.state.endSlice + 4
    })
  }

  handleEatSushi = (sushi) => {
    if(this.state.money - sushi.price >= 0 && !sushi.eaten){
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
      alert("Already Eaten or No Money ")
    }
  }

  render() {
    return (
      <div className="app">
        
        <SushiContainer sushis={this.state.sushis.slice(this.state.startSlice,this.state.endSlice)}  handleMoreSushi={this.handleMoreSushi} handleEatSushi={s => this.handleEatSushi(s)}/>
        <Table plates={this.state.platesArr} money={this.state.money}/>
      </div>
    );
  }
}

export default App;