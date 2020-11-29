import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './Clock';
//import { render } from '@testing-library/react';

class App extends Component {

  state = {
    secondRation: 0,
    minuteRation: 0,
    hourRation: 0
  }

  componentDidMount () {
    setInterval(() => {
      this.setClock()
    }, 1000);
  }

  setClock = () => {
    const currentDate = new Date;
    let secondRatio = currentDate.getSeconds() / 60;
    let minuteRatio = (secondRatio + currentDate.getMinutes()) / 60;
    let hourRatio = (minuteRatio + currentDate.getHours()) /12;

    this.setState({secondRatio: secondRatio = currentDate.getSeconds() / 60})
    this.setState({minuteRatio: minuteRatio = (secondRatio + currentDate.getMinutes()) / 60})
    this.setState({hourRatio: hourRatio = (minuteRatio + currentDate.getHours()) / 12});
  }

  render() {
    const { secondRatio, minuteRatio, hourRatio } = this.state
    return (
      <Clock secondRatio={secondRatio} minuteRatio={minuteRatio} hourRatio={hourRatio} />
  );
  }  
}

export default App;
