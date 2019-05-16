import React, { Component, Fragment } from 'react';
import Drink from '../Drink';
import DrinkComponent from '../DrinkComponent';
import axios from 'axios';

class NonAlcoholicCategory extends Component {
    state = {
        nonAlcoholicDrinks: [],
        showItem: false,
        selectedItem: {
            idDrink: "14029",
            strDrink: "'57 Chevy with a White License Plate",
            strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/qyyvtu1468878544.jpg"
        }
    }

    componentDidMount() {
        axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic')
            .then(response => this.setState({ nonAlcoholicDrinks: response.data.drinks }, function () {}));
    }

    toggleDetails = () => {
        this.setState({ showItem: !this.state.showItem });
    }

    render() {
        let nonAlcoholicDrinks = null;
        nonAlcoholicDrinks = this.state.nonAlcoholicDrinks.map((nonAlcoholicDrink, index) => {
            return <Drink {...nonAlcoholicDrink} key={index} onClick={this.toggleDetails} />
        }
        );
        return (
            <Fragment>
                <div className="Category-Container">
                    <div className="Category-Title">
                        <p className="Category-Title-Text">Non Alcoholic</p>
                    </div>

                    <div className="Category-Data">
                        {!this.state.showItem && nonAlcoholicDrinks}
                        {this.state.showItem && <DrinkComponent selectedItem={this.state.selectedItem} onClick={this.toggleDetails}/>}
                    </div>
                </div>
            </Fragment>)
    }
}

export default NonAlcoholicCategory;