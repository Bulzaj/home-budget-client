import Modal from "../components/modal/modal";
import FlexLayout from "../layouts/flex-layout";
import Typography from "../typography/typography";
import Form from "../components/form/form";

const AccountInitModal = (props) => {
  return (
    <Modal show={props.show} onClose={props.onClose}>
      <FlexLayout styles={["column"]}>
        <Form>
          <Form.Title>Just one more step...</Form.Title>
          <Typography.Paragraph>Create your accounts:</Typography.Paragraph>
          <FlexLayout>
            <Form.Group>
              <Form.Input type="text" placeholder="Enter main account name" />
            </Form.Group>
            <Form.Group>
              <Form.Dropdown></Form.Dropdown>
            </Form.Group>
          </FlexLayout>
        </Form>
      </FlexLayout>
    </Modal>
  );
};

export default AccountInitModal;
