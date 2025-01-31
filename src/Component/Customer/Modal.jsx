import React from "react";
import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalTitle,
} from "react-bootstrap";
import "../Tasks/Tasklist.css";
import { useSelector } from "react-redux";

export const Addmodal = (props) => {
  const { open, setOpen, handleChange, AddUpdateCustomer } = props.modalProps;
  const Customerdetails = useSelector(
    (state) => state.customer.customerDetails
  );
  return (
    <Modal show={open} onHide={() => setOpen(false)}>
      <ModalHeader closeButton>
        <ModalTitle>
          {!Customerdetails?.id ? "Add" : "Update"} Customer
        </ModalTitle>
      </ModalHeader>
      <ModalBody>
        <form>
          <div className="form-group mb-3">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={Customerdetails?.name}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="form-group mb-3">
            <label>Age</label>
            <input
              type="number"
              className="form-control"
              name="age"
              value={Customerdetails?.age}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="form-group">
            <label>Address</label>
            <input
              type="text"
              className="form-control"
              name="address"
              value={Customerdetails?.address}
              onChange={(e) => handleChange(e)}
            />
          </div>
        </form>
      </ModalBody>
      <ModalFooter>
        <Button variant="success" onClick={(e) => AddUpdateCustomer(e)}>
          {!Customerdetails?.id ? "Add" : "Update"}
        </Button>
        <Button variant="secondary" onClick={() => setOpen(false)}>
          Close
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export const Confirmationmodal = (props) => {
  const { open, setOpen, Deletecustomer } = props.modalProps;
  return (
    <Modal show={open} onHide={() => setOpen(false)}>
      <ModalHeader closeButton>
        <ModalTitle>Confirmation</ModalTitle>
      </ModalHeader>
      <ModalBody>Do you want delete this task ?</ModalBody>
      <ModalFooter>
        <Button variant="danger" onClick={(e) => Deletecustomer(e)}>
          Delete
        </Button>
        <Button variant="secondary" onClick={() => setOpen(false)}>
          Close
        </Button>
      </ModalFooter>
    </Modal>
  );
};
