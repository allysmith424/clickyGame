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
    players,
    count: 0,
    topScore: 0,
    clicked: [],
    commentary: "Click an image to begin"
  };

  handleClick = id => {
    const clicked = this.state.clicked;
    if (clicked.indexOf(id) === -1) {
      clicked.push(id);
      this.setState({ clicked: clicked });
      this.setState({ count: this.state.count + 1 });
      this.setState({ commentary: "You guessed correctly!" });
      if (this.state.count >= this.state.topScore) {
        this.setState({ topScore: this.state.count });
      }
    }
    else {
      this.setState({ count: 0 });
      this.setState({ commentary: "You guessed incorrectly!" });
    }
  }

  render() {
    return (
      <div>
        <Navbar
          count = {this.state.count}
          topScore = {this.state.topScore}
          commentary = {this.state.commentary}
        />
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
