import React, { Component } from "react";
import Coin from "../Coin/Coin";
import "./CoinFlipper.css";

class CoinFlipper extends Component {
  constructor(props) {
    super(props);
    // State üzerinde paranın başlangıçtaki durumunu veriyoruz, başlangıçta "tura" olsun.
    // Daha sonra şu anda paranın dönüp dönmeme durumunu da veriyoruz, başlangıçta para atılmamış olduğundan "false" olarak verdik.
    this.state = {
      side: "",
      flipping: false,
      clickCount: 0,
      head: 0,
      tail: 0,
    };
  }
  handleClick = () => {
    let { clickCount, head, tail } = this.state;
    // "At!" butonuna tıkladığımızda paranın dönmesini istiyoruz, bu yüzden "flipping" durumunu "true" yapıyoruz.
    this.setState({ flipping: true });
    // 1 saniye kadar dönmesi yeterli, bu yüzden 1 saniye sonra "flipping" durmunu tekrar "false" yapıyoruz.
    setTimeout(() => this.setState({ flipping: false }), 1000);

    const random = Math.round(Math.random()) === 0 ? "tura" : "yazi";

    if (random === "tura") {
      this.setState({ head: head + 1 });
      this.setState({ side: "tura" });
    } else {
      this.setState({ tail: tail + 1 });
      this.setState({ side: "yazi" });
    }

    this.setState({ clickCount: clickCount + 1 });
  };

  render() {
    return (
      <div className="CoinFlipper">
        <h1>Yazı mı Tura mı?</h1>
        <Coin side={this.state.side} flipping={this.state.flipping} />
        <button onClick={this.handleClick}>At!</button>
        <p>
          Toplam
          <strong> {this.state.clickCount} </strong>
          atıştan
          <strong> {this.state.head} </strong> tura
          <strong> {this.state.tail} </strong>
          yazı geldi.
        </p>
      </div>
    );
  }
}

export default CoinFlipper;
