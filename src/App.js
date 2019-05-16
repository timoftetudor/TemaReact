import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';

import AlcoholicCategory from './categories/AlcoholicCategory';
import NonAlcoholicCategory from './categories/NonAlcoholicCategory';
import OrdinaryCategory from './categories/OrdinaryCategory';
import CocktailGlassCategory from './categories/CocktailGlassCategory';
import ChampagneFluteCategory from './categories/ChampagneFluteCategory';
import './App.css';

class App extends Component {
  state = {
    selectedItem: {}
  }

  toggleDetails = () => {
    this.setState({ showItem: !this.state.showItem });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <p>
              Cocktails
            </p>
          </header>

          <div className="Category-Options">
            <Link to="/alcoholic" className="Category-Name">Alcoholic</Link>
            <Link to="/nonAlcoholic" className="Category-Name">Non-Alcoholic</Link>
            <Link to="/ordinaryDrink" className="Category-Name">Ordinary Drink</Link>
            <Link to="/cocktailGlass" className="Category-Name">Cocktail glass</Link>
            <Link to="/champagneFlute" className="Category-Name">Champagne Flute</Link>
          </div>

          <div className="Search-Container">
            <div className="Search-Bar">
              <p className="Search-Text">Search by name</p>
            </div>
          </div>

          <Switch>
            <Route path="/alcoholic" component={AlcoholicCategory} />
            <Route path="/nonAlcoholic" component={NonAlcoholicCategory} />
            <Route path="/ordinaryDrink" component={OrdinaryCategory} />
            <Route path="/cocktailGlass" component={CocktailGlassCategory} />
            <Route path="/champagneFlute" component={ChampagneFluteCategory} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
