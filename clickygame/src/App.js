import React, { Component } from "react";
import './App.css';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import MainContainer from "./components/MainContainer";
import ClickItem from "./components/ClickItem";
import Footer from "./components/Footer";
import players from "./players.json";


class App extends Component {

  state = {
    players
  };

  render() {
    return (
      <div>
        <Navbar />
        <Header />
        <MainContainer>
          {this.state.players.map(player => (
            <ClickItem
              id={player.id}
              image={player.image}
            />
          ))}
        </MainContainer>
        <Footer />
      </div>
    );
  }

}

export default App;
