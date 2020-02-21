import React, { Component } from 'react';
import meme from './images/meme.png'
class Header extends Component {
    render() {
        return (
            <div>
                <header id="header">
                <img src={meme} width="100%"/>
                </header>
            </div>
        );
    }
}

export default Header;