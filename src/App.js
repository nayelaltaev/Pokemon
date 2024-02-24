import React, { Component } from "react";
import "./App.css";

export default class component extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
  }

  componentDidMount() {
    fetch("https://pokeapi.co/api/v2/pokemon/ ")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.results,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <p> {error.message} </p>;
    } else if (!isLoaded) {
      return <p> Loading </p>;
    } else {
      return (
        <div id="mainContainer">
          <ol>
            {items.map((item) => (
              <li key={item.name}>
                {item.name}
                {/* <img src={item.url} /> */}
                <img
                  width={"150px"}
                  height={"150px"}
                  src={`https://img.pokemondb.net/artwork/${item.name}.jpg`}
                />
              </li>
            ))}
          </ol>
        </div>
      );
    }
  }
}
