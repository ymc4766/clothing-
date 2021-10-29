import React from "react";
import { connect } from "react-redux";
import "./collectionPage-style.scss";
import CollectionItem from "../../components/collection-item/CollectionItem";
// import { selectCollection } from "../../actions/selectors/shop-selector";

function CollectionPage({ collection }) {
  console.log("col-page", collection);
  const { title, items } = collection;
  // console.log(collection);
  return (
    <div className="coll-page">
      {/* <h1>Collection page</h1> */}
      <h1 className="title">{title}</h1>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => ({
  // collection: selectCollection(ownProps.match.params.collectionId)(state),
  collection: state.shop.collections[ownProps.match.params.collectionId],
});

export default connect(mapStateToProps)(CollectionPage);
