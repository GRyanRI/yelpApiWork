import React, { Component } from 'react';
import './App.css';

import BusinessList from './components/BusinessList/BusinessList';
import SearchBar from './components/SearchBar/SearchBar';

const business = {
  imageSrc: 'https://placeimg.com/300/300/any/grayscale',
  name: 'MarginOtto Pizzeria',
  address: '1010 Paddington Way',
  city: 'Flavortown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90
};

const businesses = [
  business,
  business,
  business,
  business,
  business,
  business
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Yelp API Work</h1>
        <SearchBar />
        <BusinessList businesses={businesses} />
      </div>
    );
  }
}

export default App;
