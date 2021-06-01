import React, { Component } from 'react'
import axios from "axios";
import CrudData from '../components/CrudData';
import DataForm from '../components/DataForm';

export class Favorites extends Component {
  constructor(props){
    super(props);
    this.state = {
      server: process.env.REACT_APP_SERVER_URL,
      favData: [],
      showFavcomponent: false,
      showForm: false,
      slug: '',
      name: '',
      gender: ''
    }
  }

  componentDidMount = () => {
    this.getFavData();
  }

  gatFavData = async () => {
    const url = `${this.state.server}/game/fav`;

    const requestData = await axios.get(url);

    this.setState({
      favData: requestData.data,
      showFavcomponent: true
    });

  }

  deleteFavData = async (slug) => {
    const url = `${this.state.server}/game/fav/${slug}`;

    await axios.delete(url);
    
    this.getFavData();

  }

  updateForm = (slug,name,gender) => {
    this.setState({
      showForm: true,
      name: name,
      slug: slug,
      gender: gender
    });
  }

  updateNameData = (e) => this.setState({name: e.target.value});
  updateGenderData = (e) => this.setState({gender: e.target.value});


  updateFavData = async (e) => {
    e.preventDefault();

    const url = `${this.state.server}/game/fav/${this.state.slug}`

    await axios.put(url , {name:this.state.name, gender:this.state.gender});

    this.setState({
      showForm: false
    });

    this.getFavData();

  }

  render() {
    return (
      <div>
        {this.state.showForm && 
          <DataForm
          updateFavData={this.updateFavData}
          updateNameData={this.updateNameData}
          updateGenderData={this.updateGenderData}
          />
        }

        {this.state.favData&& 
          <CrudData
          deleteFavData={this.deleteFavData}
          updateForm={this.updateForm}
          />
        }
      </div>
    )
  }
}

export default Favorites
