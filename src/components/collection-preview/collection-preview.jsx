import React from "react";

import CollectionItem from "../collection-item/collection-item";

import "./collection-preview.scss";

const CollectionPreview = ({ title, items }) => (
  <li className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <ul className="preview">
      {items
        .filter((_item, idx) => idx < 4)
        .map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </ul>
  </li>
);

export default CollectionPreview;
