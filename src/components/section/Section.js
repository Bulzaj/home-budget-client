import React, { useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import useOnScreen from "../../hooks/use-on-screen";
import { styleMapper } from "../../utill/style-mapper";

const Section = (props) => {
  const sectionRef = useRef(null);

  const isVisible = useOnScreen(sectionRef, {
    rootMargin: "0px",
    threshold: 1.0,
  });

  const history = useHistory();

  // If props.setSectionIdToPath is true, update url to actual showed on screen
  useEffect(() => {
    if (props.setSeectionIdToPath) {
      history.push(`#${props.id}`);
    }
  }, [isVisible, props.id, history]);

  return (
    <section
      id={props.id}
      ref={sectionRef}
      className={styleMapper("section", props.styles)}
    >
      {props.children}
    </section>
  );
};

export default Section;
