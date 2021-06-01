import React, { Component } from 'react'
import axios from "axios";
import ApiData from '../components/ApiData';

export class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      server: process.env.REACT_APP_SERVER_URL,
      gameData: [],
      showGameComponent: false,
      message:'',
      showMessage: false
    }
  }

  componentDidMount = () => {
    this.getGameData();
  }

  getGameData = async  () => {
    const url = `${this.state.server}/game`;
    
    const requestData = await axios.get(url);

    this.setState({
      gameData: requestData.data,
      showGameComponent: true
    });

  }

  addFavGame = async (obj) => {
    const url = `${this.state.server}/game/fav`;

    const requestData = await axios.post(url,obj);

    this.setState({
      message: requestData.data,
      showMessage: true,
    });

  }

  render() {
    return (
      <>
        {this.state.showMessage &&
          <h3>{this.state.message}</h3>
        }

        {this.state.showGameComponent && 
          <ApiData
            gameData={this.state.gameData}
            addFavGame={this.addFavGame}
          />
        }
      </>
    )
  }
}

export default Main
