import React from "react";
// import { withRouter } from "react-router-dom";
import "./Menu-item.scss";

function MenuItem({ title, imageUrl, size, history, match, linkUrl }) {
  return (
    <div
      className={`menu__item ${size}`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div
        style={{ backgroundImage: `url(${imageUrl})` }}
        className="background__image "
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">buy now</span>
      </div>
    </div>
  );
}

export default MenuItem;
