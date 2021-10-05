import Box from "../../components/box/box";
import Form from "../../components/form/form";
import Button from "../../components/button/button";
import Image from "../../components/image/image";
import classes from "./login-form.module.css";
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";
import { HiOutlineLogin } from "react-icons/hi";
import loginImg from "../../assets/img/auth_image.png";
import { useAuth } from "../../hooks/use-auth";
import useFormData from "../../hooks/use-form-data";
import { useState } from "react";
import { useHistory } from "react-router";
import List from "../../components/list/list";

const LoginForm = (props) => {
  const auth = useAuth();
  const [errors, setErrors] = useState([]);
  const [formData, setdata] = useFormData();
  const history = useHistory();

  const onLogInHandler = (e) => {
    e.preventDefault();
    auth
      .login(formData, () => history.push("/dashboard"))
      .catch((err) => {
        setErrors(err.response.data);
      });
  };

  const onEmailInputChange = (e) => {
    e.preventDefault();
    setdata({ email: e.target.value });
  };

  const onSecretInputChange = (e) => {
    e.preventDefault();
    setdata({ password: e.target.value });
  };

  let errorsPane = null;
  if (errors.length) {
    errorsPane = (
      <Box styles={["transparent"]}>
        <List styles={["danger"]} items={errors} />
      </Box>
    );
  }

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
              onChange={onEmailInputChange}
            />
          </Box>
          <Box styles={["transparent"]}>
            <Form.Input
              type="password"
              icon={RiLockPasswordLine}
              placeholder="Enter your password..."
              onChange={onSecretInputChange}
            />
          </Box>
          {errorsPane}
          <Box styles={["transparent"]}>
            <Button
              icon={HiOutlineLogin}
              styles={["full-width"]}
              onClick={onLogInHandler}
            >
              Log in
            </Button>
          </Box>
        </Form>
        <Box.Divider />
        <Box styles={["transparent"]}>
          <p className={classes.paragraph}>New to us?</p>
          <Button styles={["link"]}>Create account</Button>
        </Box>
      </Box>
    </div>
  );
};

export default LoginForm;
