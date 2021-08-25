import React from "react";
import Section from "../../components/section/Section";
import Box from "../../components/box/box";
import Form from "../../components/form/form";
import Button from "../../components/button/button";

import CenterBox from "../../layouts/center-box";
import FlexLayout from "../../layouts/flex-layout";

import { HiUser } from "react-icons/hi";
import { RiLockPasswordFill } from "react-icons/ri";

import backgroundImage2 from "../../assets/img/background_lowpoly.jpg";
import Typography from "../../typography/typography";

const Home = () => {
  return (
    <div>
      <Section id="join" img={backgroundImage2}>
        <CenterBox>
          <Box styles={["rounded", "width-sm"]}>
            <FlexLayout styles={["justify-center"]}>
              <Form>
                <Form.Title>Log in</Form.Title>
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
                <Button styles={["background-gradient", "full-width"]}>
                  Login
                </Button>
                <Typography.Paragraph styles={["justify-center", "color-grey"]}>
                  Have no account yet?
                </Typography.Paragraph>
                <Typography.Paragraph
                  styles={["justify-center", "clickable", "color-grey-dark"]}
                >
                  Register now!
                </Typography.Paragraph>
              </Form>
            </FlexLayout>
          </Box>
        </CenterBox>
      </Section>
    </div>
  );
};

export default Home;
