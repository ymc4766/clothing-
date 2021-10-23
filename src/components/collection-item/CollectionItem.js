import React from "react";
import "./collectionItem-style.scss";

function CollectionItem({ id, name, price, imageUrl }) {
  return (
    <div className="collection__item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection__footer">
        {/* //collection footer */}
        <span className="name"> {name}</span>
        <span className="price"> {price}</span>
      </div>
    </div>
  );
}

export default CollectionItem;
