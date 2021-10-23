import React from "react";
import "./Hompage.styles.scss";

function Hompage() {
  return (
    <div className="hompage">
      <div className="directory__menu">
        <div className="menu__item">
          <div className="content">
            <h1 className="title">hats</h1>
            <span className="subtitle">buy now</span>
          </div>
        </div>
        <div className="menu__item">
          <div className="content">
            <h1 className="title">womens</h1>
            <span className="subtitle">buy now</span>
          </div>
        </div>
        <div className="menu__item">
          <div className="content">
            <h1 className="title">mens</h1>
            <span className="subtitle">buy now</span>
          </div>
        </div>
        <div className="menu__item">
          <div className="content">
            <h1 className="title">jackets</h1>
            <span className="subtitle">buy now</span>
          </div>
        </div>
        <div className="menu__item">
          <div className="content">
            <h1 className="title">sneakers</h1>
            <span className="subtitle">buy now</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hompage;
