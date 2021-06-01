import React, { Component } from 'react'

export class ApiData extends Component {
  render() {
    return (
      this.props.gameData.map((obj, idx) => {
        return(
          <div key={idx}>
            <h2>{obj.name}</h2>
            <h3>{obj.gender}</h3>
            <img src = {obj.img} alt= {obj.name}/>
            <p>{obj.psiPowers.name}</p>
            <button onClick={(e) =>this.props.addFavGame(obj)}>Add to favorites</button>
          </div>
        );
      })
    );
  }
}

export default ApiData
