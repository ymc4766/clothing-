import React from "react";
import { connect } from "react-redux";
import CustomBtn from "../../Forms/Custom-Btn/CustomBtn";
import "./collectionItem-style.scss";
import { addItem } from "../../actions/actions";

function CollectionItem({ item, addItem }) {
  const { name, price, imageUrl } = item;

  //   useEffect(() => {
  //     addItem(item);
  //   }, []);

  return (
    <div className="collection__item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection__footer">
        {/* //collection footer */}
        <span className="name"> {name}</span>
        <span className="price"> {price}</span>
      </div>
      <CustomBtn inverted onClick={() => addItem(item)}>
        add to cart
      </CustomBtn>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return { addItem: (item) => dispatch(addItem(item)) };
};

export default connect(null, mapDispatchToProps)(CollectionItem);
