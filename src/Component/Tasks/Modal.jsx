import React from "react";
import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalTitle,
} from "react-bootstrap";
import "./Tasklist.css";

export const AddTaskmodal = (props) => {
  const { open, setOpen, handleChange, Addtask, taskdetails } =
    props.modalprops;
  return (
    <Modal show={open} onHide={() => setOpen(false)}>
      <ModalHeader closeButton>
        <ModalTitle>Add Task</ModalTitle>
      </ModalHeader>
      <ModalBody>
        <form>
          <div className="form-group mb-3">
            <label>Title</label>
            <input
              className="form-control"
              name="title"
              value={taskdetails?.title}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="form-group">
            <label>Description</label>
            <input
              className="form-control"
              name="description"
              value={taskdetails?.description}
              onChange={(e) => handleChange(e)}
            />
          </div>
        </form>
      </ModalBody>
      <ModalFooter>
        <Button variant="success" onClick={(e) => Addtask(e)}>
          Add
        </Button>
        <Button variant="secondary" onClick={() => setOpen(false)}>
          Close
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export const UpdateTaskmodal = (props) => {
  const { updateopen, setUpdateopen, handleChange, updateTask, taskdetails } =
    props.modalprops;
  return (
    <Modal show={updateopen} onHide={() => setUpdateopen(false)}>
      <ModalHeader closeButton>
        <ModalTitle>Update Task</ModalTitle>
      </ModalHeader>
      <ModalBody>
        <form>
          <div className="form-group mb-3">
            <label>Title</label>
            <input
              className="form-control"
              name="title"
              value={taskdetails?.title}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="form-group">
            <label>Description</label>
            <input
              className="form-control"
              name="description"
              value={taskdetails?.description}
              onChange={(e) => handleChange(e)}
            />
          </div>
        </form>
      </ModalBody>
      <ModalFooter>
        <Button variant="success" onClick={(e) => updateTask(e)}>
          Update
        </Button>
        <Button variant="secondary" onClick={(e) => setUpdateopen(false)}>
          Close
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export const Confirmationmodal = (props) => {
  const { open, setOpen, deleteTask } = props.modalprops;
  return (
    <Modal show={open} onHide={() => setOpen(false)}>
      <ModalHeader closeButton>
        <ModalTitle>Confirmation</ModalTitle>
      </ModalHeader>
      <ModalBody>Do you want delete this task ?</ModalBody>
      <ModalFooter>
        <Button variant="danger" onClick={(e) => deleteTask(e)}>
          Delete
        </Button>
        <Button variant="secondary" onClick={() => setOpen(false)}>
          Close
        </Button>
      </ModalFooter>
    </Modal>
  );
};
