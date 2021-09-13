import { useState } from "react";

import Form from "../../components/form/form";
import Image from "../../components/image/image";
import Button from "../../components/button/button";
import Typography from "../../typography/typography";

import authImage from "../../assets/img/auth_image.png";
import { HiMail } from "react-icons/hi";
import { RiLockPasswordFill } from "react-icons/ri";

import axios from "axios";

import useFormData from "../../hooks/use-form-data";

import { URL_API_AUTH } from "../../utill/url-consts";
import { useHistory } from "react-router";

const LoginForm = (props) => {
  const [formData, setFormData] = useFormData();
  const [errors, setErrors] = useState([]);

  const history = useHistory();

  const emailOnChangeHandler = (e) => {
    setFormData({ email: e.target.value });
  };

  const passwordOnChangeHandler = (e) => {
    setFormData({ password: e.target.value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    axios
      .post(URL_API_AUTH + "/login", formData)
      .then((res) => {
        setErrors([]);

        localStorage.setItem("accessToken", res.data.accessToken);
        localStorage.setItem("refreshToken", res.data.refreshToken);

        history.push("/dashboard");
      })
      .catch((err) => {
        setErrors(err.response.data);
      });
  };

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
          onChange={emailOnChangeHandler}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Password</Form.Label>
        <Form.Input
          type="password"
          icon={RiLockPasswordFill}
          placeholder="Enter password here..."
          onChange={passwordOnChangeHandler}
        />
      </Form.Group>
      <Form.Group>
        <Form.Errors errors={errors} />
      </Form.Group>
      <Button
        styles={["background-gradient", "full-width"]}
        onClick={onSubmitHandler}
      >
        Login
      </Button>
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
