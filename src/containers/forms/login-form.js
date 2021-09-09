import Form from "../../components/form/form";
import Image from "../../components/image/image";
import Button from "../../components/button/button";
import Typography from "../../typography/typography";

import authImage from "../../assets/img/auth_image.png";
import { HiMail } from "react-icons/hi";
import { RiLockPasswordFill } from "react-icons/ri";

const LoginForm = (props) => {
  return (
    <Form>
      <Form.Title>Log in</Form.Title>
      <Image src={authImage} alt="auth image" />
      <Form.Group>
        <Form.Label>Email</Form.Label>
        <Form.Input
          type="email"
          icon={HiMail}
          placeholder="Enter email here..."
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
        onClick={props?.toggleForm}
      >
        Register now!
      </Typography.Paragraph>
    </Form>
  );
};

export default LoginForm;
