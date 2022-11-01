import React from "react";
import "./styles.scss";

// <div className="card-wrapper__red-circle"></div>

export default function App() {
  return (
    <div className="App">
      <h1>dssdsdds</h1>

      {/* Разметку пишите тут */}
      <div className="card-test-wrapper">
        <div className="card-test-wrapper__yellow-square yellow-square">
          <div className="yellow-square__red-square"></div>
        </div>
        <div className="card-test-wrapper__content content">
          <div className="content__info">
            <p className="content__info-info-meta"></p>
            <p className="content__info-info-meta"></p>
          </div>

          <h4 className="content__title"></h4>
          <p className="content__description"></p>
        </div>

        <div className="card-test-wrapper__share share">
          <a href="#" className="share__link"></a>
          <a href="#" className="share__link"></a>
          <a href="#" className="share__link"></a>
        </div>
      </div>

      <div className="card-example">
        <img
          className="card-example__image"
          src="/card-item.svg"
          alt="card-example"
        />
      </div>
    </div>
  );
}
