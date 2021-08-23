import React from "react";
import Navbar from "../../components/navbar/navbar";
import Section from "../../components/section/Section";
import CenterBox from "../../layouts/center-box";

import BackgroundImage from "../../components/background-image/background-image";
import backgroundImage1 from "../../assets/img/laniding_page_1.jpg";

import Typography from "../../typography/typography";

import { Form, Button, Container } from "react-bootstrap";

const links = [{ to: "/dashboard", label: "Start Now!" }];

const Home = () => {
  return (
    <div>
      <Navbar links={links} />
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
        </CenterBox>
      </Section>
      <Section id="join" styles={["full-height", "background-grey-light"]}>
        <Container>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Container>
      </Section>
    </div>
  );
};

export default Home;
