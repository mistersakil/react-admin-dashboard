import "./users.css";
import { useState } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { dummyUserRows } from "../../../dummyData";
import { FiberManualRecord, Edit, DeleteForever } from "@material-ui/icons";
import { Link } from "react-router-dom";
import Layout from "../Layout";

export default function Users(props) {
  const [userList, userListSet] = useState(dummyUserRows);
  const handleDelete = (id) => {
    console.log(id);
    userListSet((users) => {
      return userList.filter((user) => user.id !== parseInt(id));
    });
  };

  const columns = [
    { field: "id", headerName: "ID", flex: 0.6 },
    { field: "firstName", headerName: "First name", flex: 1 },
    { field: "lastName", headerName: "Last name", flex: 1 },
    { field: "username", headerName: "Username", flex: 1 },
    { field: "email", headerName: "Email", flex: 1.4 },
    {
      field: "avatar",
      headerName: "Avatar",

      renderCell: (params) => {
        return (
          <>
            <img
              src={params.row.avatar}
              alt={params.row.username}
              className="avatar"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
      flex: 0.8,
    },
    {
      field: "status",
      headerName: "Actions",
      width: 150,
      renderCell: (params) => {
        const { status, id } = params.row;
        return (
          <>
            {status === "active" ? (
              <span title={status} className="statusIcon">
                <FiberManualRecord style={{ color: "var(--green)" }} />
              </span>
            ) : status === "inactive" ? (
              <span title={status} className="statusIcon">
                <FiberManualRecord style={{ color: "var(--grey)" }} />
              </span>
            ) : (
              <span title={status} className="statusIcon">
                <FiberManualRecord style={{ color: "var(--orange)" }} />
              </span>
            )}
            <span className="edit" title="Edit">
              <Link to={`/users/edit/${id}`} className="editLink">
                <Edit />
              </Link>
            </span>
            <span className="delete" title="Delete">
              <span
                className="deleteLink"
                onClick={() => {
                  handleDelete(id);
                }}
              >
                <DeleteForever />
              </span>
            </span>
          </>
        );
      },
      flex: 0.8,
    },
  ];

  return (
    <Layout {...props}>
      <section className="users">
        <h3 className="usersTitle">User list</h3>
        {/* <div style={{ height: "85vh", width: "100%" }}>
          <DataGrid
            rows={userList}
            columns={columns}
            pageSize={7}
            checkboxSelection
            disableSelectionOnClick
          />
        </div> */}
      </section>
    </Layout>
  );
}
