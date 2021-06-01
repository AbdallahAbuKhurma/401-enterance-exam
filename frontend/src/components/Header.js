import React, { Component } from 'react';

export class Header extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li><a href='/'>Home page</a></li>
                    <li><a href='/fav'>Favorites page</a></li>
                </ul>
            </div>
        )
    }
}

export default Header
