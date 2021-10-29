import React from "react";
import { connect } from "react-redux";
import "./collectionOverview-style.scss";
import PreviewCollection from "../../components/preview-collection/PreviewCollection";
import { selectCollectionsForPreview } from "../../actions/selectors/shop-selector";

function CollectionOverview({ collections }) {
  return (
    <div className="coll-overview">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <PreviewCollection key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
}

const mapStateToProps = (state) => {
  return { collections: selectCollectionsForPreview(state) };
};

export default connect(mapStateToProps)(CollectionOverview);
