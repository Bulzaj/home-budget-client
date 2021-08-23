import React from "react";
import Section from "../../components/section/Section";
import CenterBox from "../../layouts/center-box";
import BackgroundImage from "../../components/background-image/background-image";
import backgroundImage1 from "../../assets/img/laniding_page_1.jpg";
import newUserImage from "../../assets/img/new_user.png";
import Typography from "../../typography/typography";
import { HashLink } from "react-router-hash-link";

const Home = () => {
  return (
    <div>
      <Section id="overview" styles={["full-height"]}>
        <BackgroundImage
          img={backgroundImage1}
          styles={["gradient-primary-dark"]}
        />
        <CenterBox styles={["column"]}>
          <Typography.Title styles={["background-gradient-primary"]}>
            Professional tools
          </Typography.Title>
          <Typography.Title styles={["background-gradient-secondary"]}>
            For demanding
          </Typography.Title>
          <HashLink
            className="link link--white link--margin-big"
            smooth
            to="#join"
          >
            Join now!
          </HashLink>
        </CenterBox>
      </Section>
      <Section
        id="join"
        styles={["full-height", "background-grey-light"]}
      ></Section>
    </div>
  );
};

export default Home;
