import React, { useEffect, useState } from "react";
import "./table.css";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import Example from "../PopUpExample";
import { Button, Modal } from "react-bootstrap";
import DeleteBtn from "../modal/DeleteModal";
import EditBtn from "../modal/EditModal";
import axios from "axios";

const Table = (props) => {
  console.log(props.data, "data");
  console.log(props.value);
  const [data, setData] = useState(props.data);

  //var popupS = require('popups');
  const handleEdit = () => {
    console.log("inside edit");
    <Popup trigger={<button> Edit</button>}>
      <div>Popup content here !!</div>
    </Popup>;
  };

  const [show, setShow] = useState(false); //delete state
  const [editshow, setEditShow] = useState(false); //edit state

  const [currentItem, setCurrentItem] = useState(); //selected item for delete
  const [currentEditItem, setCurrentEditItem] = useState(); //selected item for edit

  const handleShow = () => {
    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
  };

  const handleDeleteYes = () => {
    setShow(false);
    const filteredData = data.filter((item) => currentItem._id !== item._id);
    setData(filteredData);
    const deletedata = async () => {
      const deletedData = await axios.delete(
        `http://localhost:3001/signup/${currentItem._id}`,
        {
          headers: {
            authorization: localStorage.getItem("token"),
          },
        }
      );
    };
    deletedata();
  };

  const handleEditCancel = () => {
    setEditShow(false);
  };

  const handleEditOK = (editdata) => {
    setEditShow(false);
    console.log(editdata, "handleeditOK");

    const editData = async () => {
      const editedData = await axios.patch(
        `http://localhost:3001/signup/update/${currentEditItem._id}`,
        editdata,
        {
          headers: {
            authorization: localStorage.getItem("token"),
          },
        }
      );
    };
    editData();

    //updated edited data into table data to show in the table
    let updatedData = data.map((item) => {
      if (item._id === editdata._id) item = editdata;
      return item;
    });
    setData(updatedData);
  };

  return (
    <div className="container mt-5 table-responsive">
      {console.log(data)}
      {
        <table className="table  table-hover">
          <thead>
            <tr>
              <th>ID</th>
              <th>Full Name</th>
              <th>User Name</th>
              <th>Address</th>
              <th>Phone Number</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((item, index) => (
                <tr key={index}>
                  <td>{item._id}</td>
                  <td>{item.name}</td>
                  <td>{item.username}</td>
                  <td>{item.address}</td>
                  <td>{item.phoneno}</td>
                  <td>{new Date(item.updatedAt).toLocaleDateString()}</td>
                  <td>
                    {/* <button onClick={()=> handleEdit()}>Edit</button>
                             <Popup trigger={<button> Edit</button>}>
                            <div>Edit Popup content here !!</div>
                             </Popup>
                             <Popup trigger={<button> Delete</button>}>
                             <div>Delete Popup content here !!</div>
                             </Popup> */}
                    <Button
                      onClick={() => {
                        setEditShow(true);
                        setCurrentEditItem(item);
                      }}
                    >
                      Edit
                    </Button>

                    <Button
                      style={{ marginLeft: 20 }}
                      onClick={() => {
                        setShow(true);
                        setCurrentItem(item);
                      }}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            <DeleteBtn
              show={show}
              handleClose={handleClose}
              deleteItem={handleDeleteYes}
            />
            {editshow && (
              <EditBtn
                editshow={editshow}
                handleEditCancel={handleEditCancel}
                editOKItem={handleEditOK}
                selectedItem={currentEditItem}
              />
            )}
          </tbody>
        </table>
      }
    </div>
  );
};

export default Table;
