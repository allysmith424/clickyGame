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
    commentary: "Click a player to begin"
  };

  handleClick = id => {
    const clicked = this.state.clicked;
    if (clicked.indexOf(id) === -1) {
      clicked.push(id);
      this.setState({ clicked: clicked });
      this.setState({ count: this.state.count + 1 });
      this.setState({ commentary: "You guessed correctly!" });
      if (this.state.count >= this.state.topScore) {
        this.setState({ topScore: this.state.count + 1});
      }
    }
    else {
      this.setState({ count: 0 });
      this.setState({ clicked: [] });
      this.setState({ commentary: "You guessed incorrectly!" });
    }
    this.checkIfFinished();
  }

    checkIfFinished = () => {
      if (this.state.count === 12) {
        this.setState({ commentary: "WOW!!! You beat the game!" });
      }
      else {
        const shuffled = players.map((a) => [Math.random(),a]).sort((a,b) => a[0]-b[0]).map((a) => a[1]);
        this.setState({ players: shuffled });
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
              handleClick={this.handleClick}
            />
          ))}
        </MainContainer>
        <Footer />
      </div>
    );
  }

}

export default App;
