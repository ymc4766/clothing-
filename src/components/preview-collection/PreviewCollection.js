import React from "react";
import CollectionItem from "../collection-item/CollectionItem";
import "./previewCollection-style.scss";

function PreviewCollection({ title, items }) {
  return (
    <div className="collection">
      <h1>{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, i) => i < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
}

export default PreviewCollection;
