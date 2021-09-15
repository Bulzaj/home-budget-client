import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { useAuth } from "../../hooks/use-auth";
import Button from "../../components/button/button";
import Select from "../../components/select/select";

import Modal from "../../components/modal/modal";

const Dashboard = (props) => {
  const history = useHistory();
  const auth = useAuth();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (!auth.user) history.push("/");
  });

  return (
    <div>
      <Button onClick={(e) => setShowModal(true)}>Show modal</Button>
      <Modal show={showModal} onClose={() => setShowModal(false)}>
        <h1>
          <Select title="Select currency" />
        </h1>
      </Modal>
      <h1>Dashboard of might and destiny</h1>
    </div>
  );
};
export default Dashboard;
