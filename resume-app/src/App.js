import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './bootstrap_grid.css';
import './style.css';
import Container from './Container';
import Footer from './Footer';
import Header from './Header';



class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Container />
        <Footer />
      </div>
    );
  }
}

export default App;
