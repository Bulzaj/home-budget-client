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
        onClick={toggleFormHandler}
      >
        Register now!
      </Typography.Paragraph>
    </Form>
  );
};

export default LoginForm;
