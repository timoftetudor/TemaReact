import React, { Component, Fragment } from 'react';

class Drink extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <Fragment>
                <div className="Item-Data">
                    <img src={this.props.strDrinkThumb} alt="description" onClick={this.props.onClick}></img>
                    <p>{this.props.strDrink}</p>
                </div>
            </Fragment>)
    }
}

export default Drink;