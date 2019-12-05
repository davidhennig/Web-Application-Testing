import React, { useState } from "react";

const ShowScoreBoard = () => {
  const [values, setValues] = useState({
    balls: 0,
    strikes: 0
  });

  const addBall = () => {
    if (values.balls === 3) {
      setValues({ balls: 0, strikes: 0 });
    } else setValues({ balls: values.balls + 1 });
  };

  const addStrike = () => {
    if (values.strikes === 2) {
      setValues({ balls: 0, strikes: 0 });
    } else setValues({ strikes: values.strikes + 1 });
  };

  const addFoul = () => {
    if (values.strikes < 2) {
      setValues({ strikes: values.strikes + 1 });
    }
  };

  const addHit = () => {
    setValues({ balls: 0, strikes: 0 });
  };

  return (
    <div>
      <div>
        <p>{values.balls}</p>
        <button id="ball" onClick={addBall}>
          Ball
        </button>
      </div>
      <div>
        <p>{values.strikes}</p>
        <button id="strikes" onClick={addStrike}>
          Strike
        </button>
      </div>
      <div>
        <button id="foul" onClick={addFoul}>
          Foul
        </button>
      </div>
      <div>
        <button id="hit" onClick={addHit}>
          Hit
        </button>
      </div>
    </div>
  );
};

export default ShowScoreBoard;
