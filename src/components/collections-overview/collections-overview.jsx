import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";

import CollectionPreview from "../../components/collection-preview/collection-preview";

import "./collections-overview.scss";

const CollectionsOverview = ({ collections }) => (
  <ul className="collections-overview">
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview
        key={id}
        {...otherCollectionProps}
      />
    ))}
  </ul>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(
  CollectionsOverview
);
