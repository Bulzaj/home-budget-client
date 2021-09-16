import React, { useState, useEffect } from "react";
import Section from "../../components/section/Section";
import Box from "../../components/box/box";

import CenterBox from "../../layouts/center-box";
import FlexLayout from "../../layouts/flex-layout";
import RegistrationForm from "../../containers/forms/registration-form";
import LoginForm from "../../containers/forms/login-form";

import backgroundImage from "../../assets/img/background_lowpoly.jpg";

import { useAuth } from "../../hooks/use-auth";
import { useHistory } from "react-router";

const Home = () => {
  const [isLoginForm, setIsLoginForm] = useState(true);
  const { user } = useAuth();
  const history = useHistory();

  useEffect(() => user && history.push("/dashboard"), [user, history]);

  const toggleFormHandler = () => {
    setIsLoginForm((prevState) => !prevState);
  };

  const form = isLoginForm ? (
    <LoginForm toggleForm={toggleFormHandler} />
  ) : (
    <RegistrationForm toggleForm={toggleFormHandler} />
  );

  if (!user) {
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
  }

  return null;
};

export default Home;
