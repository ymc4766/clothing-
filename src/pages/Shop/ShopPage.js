// import { render } from "node-sass";
import React from "react";
import { Route } from "react-router-dom";
import CollectionPage from "../collection-page/CollectionPage";

import CollectionOverview from "./CollectionOverview";

// import { SHOP_DATA } from "../../reducers/shop-data";

const ShopPage = ({ match }) => {
  console.log("page...", match);
  return (
    <div>
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
};

export default ShopPage;
