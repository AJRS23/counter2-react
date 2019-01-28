import React, { Component } from 'react';
import './title.css'
class Title extends Component {

    render() {
        console.log(this.props.count);
        return (
            <h2 className="header__title">Counters: {this.props.count}</h2>
        )
    }
}
export default Title