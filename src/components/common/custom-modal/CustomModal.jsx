import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { setShowModal } from "../../../store/systemSlice";
import { useDispatch, useSelector } from "react-redux";

export const CustomModal = ({ title, children, ...rest }) => {
  const dispatch = useDispatch();
  const { showModal } = useSelector((state) => state.system);
  return (
    <Modal
      show={showModal}
      onHide={() => dispatch(setShowModal(false))}
      {...rest}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
    </Modal>
  );
};
