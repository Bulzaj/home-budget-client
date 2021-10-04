import Box from "../../components/box/box";
import Form from "../../components/form/form";
import Button from "../../components/button/button";
import Image from "../../components/image/image";
import classes from "./login-form.module.css";
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";
import loginImg from "../../assets/img/auth_image.png";

const LoginForm = (props) => {
  return (
    <div className={classes.container}>
      <Box>
        <Box styles={["transparent"]}>
          <h1 className={classes.form__title}>Log in</h1>
        </Box>
        <Box styles={["transparent"]}>
          <Image src={loginImg} alt="login_image" />
        </Box>
        <Form>
          <Box styles={["transparent", "full-width"]}>
            <Form.Input
              type="text"
              icon={HiOutlineMail}
              placeholder="Enter your email..."
            />
          </Box>
          <Box styles={["transparent"]}>
            <Form.Input
              type="password"
              icon={RiLockPasswordLine}
              placeholder="Enter your password..."
            />
          </Box>
          <Box styles={["transparent"]}>
            <Button>Log in</Button>
          </Box>
        </Form>
        <Box.Divider />
        <Box styles={["transparent"]}>
          <p>New to us?</p>
          <Button>Create account</Button>
        </Box>
      </Box>
    </div>
  );
};

export default LoginForm;
