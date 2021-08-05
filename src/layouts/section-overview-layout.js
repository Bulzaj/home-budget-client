import React from "react";

const SectionOverviewLayout = (props) => {
  return (
    <div className="section-overview-layout">
      <div className="section-overview-layout__text-container">
        {React.Children.map(props.title, (child) => {
          return <div className="section-overview-layout__title">{child}</div>;
        })}
        {props.paragraph}
      </div>
    </div>
  );
};

export default SectionOverviewLayout;
