// import { render } from "node-sass";
import React from "react";
import PreviewCollection from "../../components/preview-collection/PreviewCollection";
import { SHOP_DATA } from "./shop-data";

class ShopPage extends React.Component {
  state = {
    collections: SHOP_DATA,
  };

  render() {
    const { collections } = this.state;
    return (
      <div>
        SHOP DATA PAGE
        {collections.map(({ id, ...otherCollectionProps }) => (
          <PreviewCollection key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}
export default ShopPage;
