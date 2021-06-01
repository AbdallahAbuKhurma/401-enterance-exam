import React, { Component } from 'react'

export class CrudData extends Component {
  render() {
    return (
      this.props.favData.map((obj, idx) => {
        return (
          <div key={idx}>
            <h2>{obj.name}</h2>
            <h3>{obj.gender}</h3>
            <p>{obj.psiPowers.name}</p>
            <button onClick={(e) => this.props.updateForm(obj.slug, obj.name, obj.gender)}>Update Item</button>
            <button onClick={(e) => this.props.deleteFavData(obj.slug)}>Delete Item</button>
          </div>
        );
      })
    );
  }
}

export default CrudData
