import React, { useEffect, useState } from "react";

function App() {
  const [openCards, setOpenCards] = useState([]);
  const [matchedCard, setMatchedCards] = useState([]);
  const [shuffleArr, setShuffleArr] = useState([]);
  const pokemons = [
    { id: 1, name: "bulbasaur" },
    { id: 8, name: "wartortle" },
    { id: 9, name: "blastoise" },
    { id: 6, name: "charizard" },
    { id: 7, name: "ivysaur" },
    { id: 5, name: "venusaur" },
  ];
  const url = "https://pokeres.bastionbot.org/images/pokemon";

  const shuffle = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  useEffect(() => {
    const pokemonsArr = [...pokemons, ...pokemons];
    setShuffleArr(shuffle(pokemonsArr));
  }, []);

  useEffect(() => {
    if (openCards.length < 2) return;

    const first = shuffleArr[openCards[0]];
    const second = shuffleArr[openCards[1]];

    if (second && first.id === second.id) {
      setMatchedCards((matchedCard) => [...matchedCard, first.id]);
    }

    if (openCards.length === 2) setTimeout(() => setOpenCards([]), 1000);
  }, [openCards]);

  const flipCard = (index) => {
    setOpenCards((prevCards) => [...prevCards, index]);
  };

  return (
    <div className="App">
      <div className="cards">
        {shuffleArr.map((pokemon, index) => {
          let isFlip = false;
          if (openCards.includes(index)) isFlip = true;

          if (matchedCard.includes(pokemon.id)) isFlip = true;

          return (
            <div
              key={index}
              className={`pokemon-card ${isFlip ? "flipped" : ""}`}
              onClick={() => flipCard(index)}
            >
              <div className="inner">
                <div className="front">
                  <img
                    src={`${url}/${pokemon.id}.png`}
                    width="100"
                    alt="pokemon"
                  />
                </div>
                <div className="back"></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
