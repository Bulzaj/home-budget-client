import { useState } from "react";
import Form from "../../components/form/form";
import Button from "../../components/button/button";
import Typography from "../../typography/typography";
import Image from "../../components/image/image";

import { HiMail } from "react-icons/hi";
import { RiLockPasswordFill } from "react-icons/ri";
import newUserImage from "../../assets/img/new_user.ico";

import useFormData from "../../hooks/use-form-data";

import { useAuth } from "../../hooks/use-auth";
import { useHistory } from "react-router";

const RegistrationForm = (props) => {
  const [formData, setFormData] = useFormData();
  const history = useHistory();
  const [errors, setErrors] = useState([]);
  const auth = useAuth();

  const emailOnChangeHandler = (e) => {
    setFormData({ email: e.target.value });
  };

  const passwordOnChangeHandler = (e) => {
    setFormData({ password: e.target.value });
  };

  const passwordAgainOnChangeHandler = (e) => {
    setFormData({ passwordAgain: e.target.value });
  };

  const onClickHandler = (e) => {
    e.preventDefault();
    auth
      .register(formData, () => history.push("/dashboard"))
      .catch((err) => setErrors(err.response.data));
  };

  return (
    <Form>
      <Form.Title>Register</Form.Title>
      <Image src={newUserImage} alt="registration image" />
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
        <Form.Label>Password again</Form.Label>
        <Form.Input
          type="password"
          icon={RiLockPasswordFill}
          placeholder="Enter password again..."
          onChange={passwordAgainOnChangeHandler}
        />
      </Form.Group>
      <Form.Group>
        <Form.Errors errors={errors} />
      </Form.Group>
      <Button
        styles={["background-gradient", "full-width"]}
        onClick={onClickHandler}
      >
        Register
      </Button>
      <Typography.Paragraph styles={["justify-center", "color-grey"]}>
        Or
      </Typography.Paragraph>
      <Typography.Paragraph
        styles={["justify-center", "clickable", "color-grey-dark"]}
        onClick={props.toggleForm}
      >
        Log in!
      </Typography.Paragraph>
    </Form>
  );
};

export default RegistrationForm;