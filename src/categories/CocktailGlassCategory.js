import React, { Component, Fragment } from 'react';
import Drink from '../Drink';
import DrinkComponent from '../DrinkComponent';
import axios from 'axios';

class CocktailGlassCategory extends Component {
    state = {
        cocktailGlassDrinks: [],
        showItem: false,
        selectedItem: {
            idDrink: "14029",
            strDrink: "'57 Chevy with a White License Plate",
            strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/qyyvtu1468878544.jpg"
        }
    }

    componentDidMount() {
        axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass')
            .then(response => this.setState({ cocktailGlassDrinks: response.data.drinks }, function () {}));
    }

    toggleDetails = () => {
        this.setState({ showItem: !this.state.showItem });
    }

    render() {
        let cocktailGlassDrinks = null;
        cocktailGlassDrinks = this.state.cocktailGlassDrinks.map((cocktailGlassDrink, index) => {
            return <Drink {...cocktailGlassDrink} key={index} onClick={this.toggleDetails} />
        }
        );
        return (
            <Fragment>
                <div className="Category-Container">
                    <div className="Category-Title">
                        <p className="Category-Title-Text">Cocktail Glass</p>
                    </div>

                    <div className="Category-Data">
                        {!this.state.showItem && cocktailGlassDrinks}
                        {this.state.showItem && <DrinkComponent selectedItem={this.state.selectedItem} onClick={this.toggleDetails}/>}
                    </div>
                </div>
            </Fragment>)
    }
}

export default CocktailGlassCategory;