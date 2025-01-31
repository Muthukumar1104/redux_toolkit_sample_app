import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../Tasks/Taskslice";
import { Addmodal, Confirmationmodal } from "./Modal";
import { handleCustomerChange, handleResetCustomer } from "./Customerslice";
import {
  addItemAction,
  deleteItemAction,
  fetchItemAction,
  updateItemAction,
  viewItemAction,
} from "./CustomerActions";

const Customer = () => {
  const dispatch = useDispatch();

  //customer list
  const customerlist = useSelector((state) => state.customer.items);

  useEffect(() => {
    dispatch(fetchItemAction());
  }, []);

  //Add and Update Customer
  const [formmodalopen, setFormmodalOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(handleCustomerChange({ field: name, value }));
  };

  const Customerdetails = useSelector(
    (state) => state.customer.customerDetails
  );

  const AddUpdateCustomer = (e) => {
    e.preventDefault();
    if (!Customerdetails?.id) {
      dispatch(addItemAction(Customerdetails));
      // dispatch(fetchItemAction());
      setFormmodalOpen(false);
    } else {
      dispatch(updateItemAction(Customerdetails));
      // dispatch(fetchItemAction());
      setFormmodalOpen(false);
    }
  };

  const modalProps = {
    open: formmodalopen,
    setOpen: setFormmodalOpen,
    handleChange: handleChange,
    AddUpdateCustomer: AddUpdateCustomer,
  };

  //View and Delete Customer
  const [confirmopen, setConfirmopen] = useState(false);

  const Viewcustomer = (id, action) => {
    dispatch(viewItemAction(id));
    if (action == "edit_view") {
      setFormmodalOpen(true);
    } else {
      setConfirmopen(true);
    }
  };

  const Deletecustomer = (e) => {
    e.preventDefault();
    dispatch(deleteItemAction(Customerdetails?.id));
    // dispatch(fetchItemAction());
    setConfirmopen(false);
  };

  const ConfirmmodalProps = {
    open: confirmopen,
    setOpen: setConfirmopen,
    Deletecustomer: Deletecustomer,
  };

  return (
    <div className="customer m-5">
      <div className="d-flex align-items-center justify-content-between mb-3 mt-3">
        <input
          type="search"
          name="search"
          //   onChange={(e) => setSearch(e.target.value)}
        />
        <button
          type="submit"
          onClick={() => {
            setFormmodalOpen(true);
            dispatch(handleResetCustomer());
          }}
        >
          Add Customer
        </button>
      </div>
      <div className="customer_table">
        <table className="table table-striped">
          <thead>
            <th>S.No</th>
            <th>Name</th>
            <th>Age</th>
            <th>Address</th>
            <th>Actions</th>
          </thead>
          {customerlist &&
            customerlist?.map((customer, i) => (
              <tbody>
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{customer?.name}</td>
                  <td>{customer?.age}</td>
                  <td>{customer?.address}</td>
                  <td>
                    <div className="d-flex align-items-center justify-content-center gap-3">
                      <i
                        class="bi bi-pencil-fill"
                        onClick={() => Viewcustomer(customer?._id, "edit_view")}
                      />
                      <i
                        class="bi bi-trash3-fill"
                        onClick={() =>
                          Viewcustomer(customer?._id, "delete_view")
                        }
                        // onClick={() => setConfirmopen(true)}
                      />
                    </div>
                  </td>
                </tr>
              </tbody>
            ))}
        </table>
      </div>
      <Addmodal modalProps={modalProps} />
      <Confirmationmodal modalProps={ConfirmmodalProps} />
    </div>
  );
};

export default Customer;
