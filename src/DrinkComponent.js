import React, { Component, Fragment } from 'react';
import DrinkDetails from './DrinkDetails';

class DrinkComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    toggleSelectedItemDetails = () => {
        this.setState({ selectedItemDetails: this.props.selectedItem });
    }

    render() {
        return (
            <Fragment>
                {!this.state.selectedItemDetails && <div className="Item-Title">
                    <p onClick={this.toggleSelectedItemDetails}>{this.props.selectedItem.strDrink}</p>
                    <img src={this.props.selectedItem.strDrinkThumb} alt="description"></img>
                    <button className="Back-DrinkComponent" onClick={this.props.onClick}>Back</button>
                </div>}
                {this.state.selectedItemDetails && <DrinkDetails selectedItem={this.state.selectedItemDetails} />}
            </Fragment>)
    }
}
export default DrinkComponent;