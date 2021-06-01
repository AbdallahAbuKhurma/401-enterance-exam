import React, { Component } from 'react'

export class DataForm extends Component {
    render() {
        return (
            <div>
                <form onSubmit={this.props.updateFavData}>
                    <input onChange={this.props.updateNameData} type='text' placeholder='Update Name'/>
                    <input onChange={this.props.updateGenderData} type='text' placeholder='Update Gender'/>
                    <button>Update</button>
                </form>
            </div>
        )
    }
}

export default DataForm
