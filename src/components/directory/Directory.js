import React from "react";
import { connect } from "react-redux";
import MenuItem from "../Menu-item/MenuItem";
import "./directory.style.scss";

const Directory = ({ sections }) => {
  return (
    <div className="directory__menu">
      {sections.map((section) => (
        <MenuItem
          key={section.id}
          title={section.title}
          imageUrl={section.imageUrl}
          size={section.size}
        />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { sections: state.directory.sections };
};

export default connect(mapStateToProps, {})(Directory);
