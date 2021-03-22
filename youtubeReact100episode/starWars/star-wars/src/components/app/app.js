import React, { Component } from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemDetails from "../item-details/item-details";
import './app.css';
import SwapiService from '../../services/swapi-serwice';
import ErrorBoundary from '../error-boundary/error-boundary';
import Row from '../row/row';
import ItemList from '../item-list/item-list';
import ErrorButton from '../error-button/error-button';

export default class App extends Component {

  state = {
    showRandomPlanet: true
  };

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet
      }
    });
  };

  render() {

    const planet = this.state.showRandomPlanet ?
      <RandomPlanet /> :
      null;

    return (
      // <ErrorBoundary>
      <div className="stardb-app">
        <Header />
        {planet}

        <div className="row mb2 button-row">
          <button
            className="toggle-planet btn btn-warning btn-lg"
            onClick={this.toggleRandomPlanet}>
            Toggle Random Planet
          </button>
          <ErrorButton />
        </div>

        <PeoplePage />

      </div>
      // </ErrorBoundary>
    );
  }
}