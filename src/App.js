import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios"

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  componentDidMount = async () => {
    let result = await axios.get("https://api.rawg.io/api/games?search=doom")
    console.log(result)
    console.log(result.data.results)

  }



  render() {
    return (
      <div className="App">
        <div className="container">
          <img src="https://ih0.redbubble.net/image.850655622.6681/flat,750x1000,075,f.u1.jpg" alt=""  />
          <div className="text-block">
            <h1>Horror Times</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
