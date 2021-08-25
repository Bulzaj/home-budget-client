import React, { useRef } from "react";
import { styleMapper } from "../../utill/style-mapper";

const Section = (props) => {
  const sectionRef = useRef(null);

  return (
    <section
      id={props.id}
      ref={sectionRef}
      className={styleMapper("section", props.styles)}
      style={{
        backgroundImage: `url(${props.img})`,
        backgroundSize: "cover",
      }}
    >
      {props.children}
    </section>
  );
};

export default Section;
