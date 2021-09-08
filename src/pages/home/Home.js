import React, { useState } from "react";
import Section from "../../components/section/Section";
import Box from "../../components/box/box";

import CenterBox from "../../layouts/center-box";
import FlexLayout from "../../layouts/flex-layout";
import RegistrationForm from "../../containers/forms/registration-form";

import backgroundImage from "../../assets/img/background_lowpoly.jpg";

const Home = () => {
  const [isLoginForm, setIsLoginForm] = useState(false);

  const toggleFormHandler = () => {
    setIsLoginForm((prevState) => !prevState);
  };

  const form = isLoginForm ? null : <RegistrationForm />;

  return (
    <div>
      <Section id="join" img={backgroundImage}>
        <CenterBox>
          <Box styles={["rounded"]}>
            <FlexLayout styles={["justify-center"]}>{form}</FlexLayout>
          </Box>
        </CenterBox>
      </Section>
    </div>
  );
};

export default Home;
