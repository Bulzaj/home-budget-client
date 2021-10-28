import Box from "../../components/box/box";
import Form from "../../components/form/form";
import Button from "../../components/button/button";
import Image from "../../components/image/image";
import List from "../../components/list/list";
import classes from "./form-container.module.css";
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";
import { HiOutlineLogin } from "react-icons/hi";
import registerImage from "../../assets/img/new_user.ico";
import { useAuth } from "../../hooks/use-auth";
import useFormData from "../../hooks/use-form-data";
import { useHistory } from "react-router";
import { useState } from "react";

const RegistrationForm = (props) => {
  const auth = useAuth();
  const [errors, setErrors] = useState([]);
  const [formData, setdata] = useFormData();
  const history = useHistory();

  const onEmailInputChange = (e) => {
    e.preventDefault();
    setdata({ email: e.target.value });
  };

  const onSecretInputChange = (e) => {
    e.preventDefault();
    setdata({ password: e.target.value });
  };

  const onSecretAgainInputChange = (e) => {
    e.preventDefault();
    setdata({ passwordAgain: e.target.value });
  };

  const onRegisterHandler = (e) => {
    e.preventDefault();
    auth
      .register(formData, () => history.push("/dashboard"))
      .catch((err) => {
        setErrors(err.response.data);
      });
  };

  const errorMsgWrapper = (item) => (
    <p className={classes.errorMessage}>{item}</p>
  );

  let errorsPane = null;
  if (errors.length) {
    errorsPane = (
      <Box styles={["transparent"]}>
        <List styles={["danger"]} items={errors} wrapper={errorMsgWrapper} />
      </Box>
    );
  }

  return (
    <div className={classes.container}>
      <Box>
        <Box styles={["transparent"]}>
          <h1 className={classes.form__title}>Register</h1>
        </Box>
        <Box styles={["transparent"]}>
          <Image src={registerImage} alt="register_image" />
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
          <Box styles={["transparent"]}>
            <Form.Input
              type="password"
              icon={RiLockPasswordLine}
              placeholder="Repeat your password..."
              onChange={onSecretAgainInputChange}
            />
          </Box>
          {errorsPane}
          <Box styles={["transparent"]}>
            <Button
              icon={HiOutlineLogin}
              styles={["full-width"]}
              onClick={onRegisterHandler}
            >
              Register
            </Button>
          </Box>
        </Form>
        <Box.Divider />
        <Box styles={["transparent"]}>
          <p className={classes.paragraph}>Or...</p>
          <Button styles={["link"]} onClick={props.onToggleFormClick}>
            Log in!
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default RegistrationForm;
