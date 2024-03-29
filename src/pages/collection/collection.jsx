import React from "react";
import { connect } from "react-redux";

import CollectionItem from "../../components/collection-item/collection-item";

import { selectCollection } from "../../redux/shop/shop.selectors";

import "./collection.scss";

const СollectionPage = ({ collection }) => {
  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <ul className="items">
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(
    ownProps.match.params.collectionId
  )(state),
});

export default connect(mapStateToProps)(СollectionPage);
