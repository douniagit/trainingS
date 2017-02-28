import React, { Component } from 'react';
import Navbar from "./navbar/Navbar.jsx";
import Header from "./Header/Header.jsx";
import Grid from "./Grid/Grid.jsx";

import Footer from "./footer/Footer.jsx";

class App extends Component {
  render() {
    return (
      <div className="App">
       <Navbar />
       <Header />
       <Grid />
       <Footer />
      </div>
    );
  }
}

export default App;
