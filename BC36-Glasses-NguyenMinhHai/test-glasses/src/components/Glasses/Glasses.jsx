import React, { Component } from "react";

import "./style.css";

export default class Glasses extends Component {
  state = {};

  handleChangeGlass = (glass) => {
    this.setState({
      imageUrl: `./glassesImage/v${glass}.png`,
    });
  };

  render() {
    return (
      <div>
        <div className="container">
          <img className="bg" src="./glassesImage/background.jpg" />

          <h3 className="heading">Try Glasses App Online</h3>

          <div className="models">
            <div className="model">
              <img src="./glassesImage/model.jpg" />
            </div>

            <div className="model rightCard">
              <img src="./glassesImage/model.jpg" />

              <div className="chosenGlass">
                <img className="glassPosition" src={this.state.imageUrl} />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="itemPool">
              <div className="items">
                <img
                  src="./glassesImage/g1.jpg"
                  width={100}
                  onClick={() => this.handleChangeGlass("1")}
                />
              </div>

              <div className="items">
                <img
                  src="./glassesImage/g2.jpg"
                  width={100}
                  onClick={() => this.handleChangeGlass("2")}
                />
              </div>

              <div className="items">
                <img
                  src="./glassesImage/g3.jpg"
                  width={100}
                  onClick={() => this.handleChangeGlass("3")}
                />
              </div>

              <div className="items">
                <img
                  src="./glassesImage/g4.jpg"
                  width={100}
                  onClick={() => this.handleChangeGlass("4")}
                />
              </div>

              <div className="items">
                <img
                  src="./glassesImage/g5.jpg"
                  width={100}
                  onClick={() => this.handleChangeGlass("5")}
                />
              </div>

              <div className="items">
                <img
                  src="./glassesImage/g6.jpg"
                  width={100}
                  onClick={() => this.handleChangeGlass("6")}
                />
              </div>

              <div className="items">
                <img
                  src="./glassesImage/g7.jpg"
                  width={100}
                  onClick={() => this.handleChangeGlass("7")}
                />
              </div>

              <div className="items">
                <img
                  src="./glassesImage/g8.jpg"
                  width={100}
                  onClick={() => this.handleChangeGlass("8")}
                />
              </div>

              <div className="items">
                <img
                  src="./glassesImage/g9.jpg"
                  width={100}
                  onClick={() => this.handleChangeGlass("9")}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
