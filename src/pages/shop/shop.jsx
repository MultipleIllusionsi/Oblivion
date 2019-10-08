import React from "react";
import { Route } from "react-router-dom";

import { default as CollectionsOverview } from "../../components/collections-overview/collections-overview.container";
import { default as СollectionPage } from "../collection/collection.container";

const ShopPage = ({ match }) => {
  console.log("match", match);
  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        component={CollectionsOverview}
      />
      <Route
        path={`${match.path}/:collectionId`}
        component={СollectionPage}
      />
    </div>
  );
};

export default ShopPage;
