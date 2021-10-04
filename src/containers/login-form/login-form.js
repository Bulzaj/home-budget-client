import Box from "../../components/box/box";
import Form from "../../components/form/form";
import Button from "../../components/button/button";
import classes from "./login-form.module.css";
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";

const LoginForm = (props) => {
  return (
    <div className={classes.container}>
      <Box>
        <Box styles={["transparent"]}>
          <h1 className={classes.form__title}>Log in</h1>
        </Box>
        <Form>
          <Form.Input
            type="text"
            icon={HiOutlineMail}
            placeholder="Enter your email..."
          />
          <Form.Input
            type="password"
            icon={RiLockPasswordLine}
            placeholder="Enter your password..."
          />
          <Button>Log in</Button>
        </Form>
        <Box styles={["transparent"]}>
          <p>New to us?</p>
          <Button>Create account</Button>
        </Box>
      </Box>
    </div>
  );
};

export default LoginForm;
