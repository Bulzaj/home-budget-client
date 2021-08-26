import React, { useState } from "react";
import Section from "../../components/section/Section";
import Box from "../../components/box/box";
import Form from "../../components/form/form";
import Button from "../../components/button/button";
import Typography from "../../typography/typography";
import Image from "../../components/image/image";

import CenterBox from "../../layouts/center-box";
import FlexLayout from "../../layouts/flex-layout";

import { HiUser } from "react-icons/hi";
import { RiLockPasswordFill } from "react-icons/ri";

import backgroundImage from "../../assets/img/background_lowpoly.jpg";
import authImage from "../../assets/img/auth_image.png";
import newUserImage from "../../assets/img/new_user.ico";

const Home = () => {
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [formData, setFormData] = useState(null);

  const toggleFormHandler = () => {
    setIsLoginForm((prevState) => !prevState);
  };

  const loginForm = (
    <Form>
      <Form.Title>Log in</Form.Title>
      <Image src={authImage} />
      <Form.Group>
        <Form.Label>Username</Form.Label>
        <Form.Input
          requirements={{
            min: 3,
            max: 20,
          }}
          type="text"
          icon={HiUser}
          placeholder="Enter username here..."
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Password</Form.Label>
        <Form.Input
          type="password"
          icon={RiLockPasswordFill}
          placeholder="Enter password here..."
        />
      </Form.Group>
      <Button styles={["background-gradient", "full-width"]}>Login</Button>
      <Typography.Paragraph styles={["justify-center", "color-grey"]}>
        Have no account yet?
      </Typography.Paragraph>
      <Typography.Paragraph
        styles={["justify-center", "clickable", "color-grey-dark"]}
        onClick={toggleFormHandler}
      >
        Register now!
      </Typography.Paragraph>
    </Form>
  );

  const registerForm = (
    <Form>
      <Form.Title>Register</Form.Title>
      <Image src={newUserImage} />
      <Form.Group>
        <Form.Label>Username</Form.Label>
        <Form.Input
          type="text"
          icon={HiUser}
          placeholder="Enter username here..."
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Password</Form.Label>
        <Form.Input
          type="password"
          icon={RiLockPasswordFill}
          placeholder="Enter password here..."
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Password again</Form.Label>
        <Form.Input
          type="password"
          icon={RiLockPasswordFill}
          placeholder="Enter password again..."
        />
      </Form.Group>
      <Button styles={["background-gradient", "full-width"]}>Register</Button>
      <Typography.Paragraph styles={["justify-center", "color-grey"]}>
        Or
      </Typography.Paragraph>
      <Typography.Paragraph
        styles={["justify-center", "clickable", "color-grey-dark"]}
        onClick={toggleFormHandler}
      >
        Log in!
      </Typography.Paragraph>
    </Form>
  );

  const form = isLoginForm ? loginForm : registerForm;

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
