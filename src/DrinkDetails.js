import React, { Component, Fragment } from 'react';

class DrinkDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    hideDetails = () => {
        this.setState({ hideItemDetails: true });
    }

    render() {
        return (
            <Fragment>
                <button className="Hide-Details" onClick={this.hideDetails}>Hide details</button>
                <img src={this.props.selectedItem.strDrinkThumb} alt="description"></img>
                <p>{this.props.selectedItem.strDrink}</p>
                <p>{this.props.selectedItem.idDrink}</p>
            </Fragment>)
    }
}

export default DrinkDetails;