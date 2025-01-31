import React, { useEffect, useState } from "react";
import { tasks } from "../data/data";
import "./Tasklist.css";
import { Confirmationmodal, AddTaskmodal, UpdateTaskmodal } from "./Modal";
import { useDispatch, useSelector } from "react-redux";
import { addItem, deleteItem, searchItem, updateItem } from "./Taskslice";
import uniqueId from "generate-unique-id";

const Tasklist = () => {
  const list = useSelector((state) => state.task.items);
  const dispatch = useDispatch();

  //Add task
  const [formmodalopen, setFormmodalopen] = useState(false);
  const [updateopen, setUpdateopen] = useState(false);

  const [taskdetails, setTaskdetails] = useState({
    id: "",
    title: "",
    description: "",
    Iscompleted: false,
  });

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    if (checked) {
      setTaskdetails({ ...taskdetails, [name]: checked });
    } else {
      setTaskdetails({ ...taskdetails, [name]: value });
    }
  };

  const Addtask = (e) => {
    e.preventDefault();
    dispatch(addItem({ id: uniqueId(), ...taskdetails }));
    setFormmodalopen(false);
    setTaskdetails({});
  };

  const viewTask = (data) => {
    setUpdateopen(true);
    setTaskdetails({ ...taskdetails, ...data });
  };

  //Update task
  const updateTask = (e) => {
    e.preventDefault();
    dispatch(updateItem(taskdetails));
    setUpdateopen(false);
  };

  //Delete task
  const [open, setOpen] = useState(false);
  const [deleteId, setDeleteId] = useState("");

  const deleteTask = () => {
    dispatch(deleteItem(deleteId));
    setOpen(false);
  };

  //search task
  const [search, setSearch] = useState("");
  useEffect(() => {
    dispatch(searchItem(search));
  }, [search]);

  const Taskmodalprops = {
    open: formmodalopen,
    setOpen: setFormmodalopen,
    updateopen: updateopen,
    setUpdateopen: setUpdateopen,
    handleChange: handleChange,
    Addtask: Addtask,
    taskdetails: taskdetails,
    updateTask: updateTask,
  };

  const Confirmmodalprops = {
    open: open,
    setOpen: setOpen,
    deleteTask: deleteTask,
  };

  return (
    <div className="tasks">
      <div className="d-flex align-items-center justify-content-between mb-3 mt-3">
        <input
          type="search"
          name="search"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          type="submit"
          onClick={() => {
            setFormmodalopen(true);
            setTaskdetails({});
          }}
        >
          Add Task
        </button>
      </div>
      <div className="tasks_panel row col-lg-12 col-md-8 col-sm-4">
        {list &&
          Object.values(list)?.map((data, i) => (
            <div className="col-lg-3 mb-3">
              <div class="card" key={i} style={{ width: "18rem" }}>
                <div class="card-body">
                  <h5 class="card-title">{data?.title}</h5>
                  <p class="card-text">{data?.description}</p>
                  <div className="d-flex align-items-center justify-content-center gap-3">
                    <i
                      class="bi bi-pencil-fill"
                      onClick={() => viewTask(data)}
                    ></i>
                    <i
                      class="bi bi-trash3-fill"
                      onClick={() => {
                        setOpen(true);
                        setDeleteId(data?.id);
                      }}
                    ></i>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
      <AddTaskmodal modalprops={Taskmodalprops} />
      <UpdateTaskmodal modalprops={Taskmodalprops} />
      <Confirmationmodal modalprops={Confirmmodalprops} />
    </div>
  );
};

export default Tasklist;
