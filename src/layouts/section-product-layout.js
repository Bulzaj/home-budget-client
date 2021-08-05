import React from "react";

const SectionProductLayout = (props) => {
  return (
    <div className="section-product-layout">
      <div className="section-product-layout__title-container">
        {props.title}
      </div>
      <div className="section-product-layout__body-container">
        {React.Children.map(props.body, (element) => element)}
      </div>
    </div>
  );
};

export default SectionProductLayout;
