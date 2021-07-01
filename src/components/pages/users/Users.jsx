import "./users.css";
import { useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import img from "../../../images/sakil.jpg";
import { FiberManualRecord } from "@material-ui/icons";
export default function Users() {
  useEffect(() => {
    document.title = `Users - ${process.env.REACT_APP_BRAND}`;
  }, []);
  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "firstName", headerName: "First name", width: 150 },
    { field: "lastName", headerName: "Last name", width: 150 },
    { field: "username", headerName: "Username", width: 150 },
    { field: "email", headerName: "Email", width: 150 },
    {
      field: "status",
      headerName: "Status",
      width: 100,
      renderCell: (fields) => {
        const { status } = fields.row;
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
          </>
        );
      },
    },
    {
      field: "others",
      headerName: "Avatar",
      width: 100,
      renderCell: (fields) => {
        return (
          <>
            <img
              src={fields.row.avatar}
              alt={fields.row.username}
              className="avatar"
            />
          </>
        );
      },
    },
  ];

  const rows = [
    {
      id: 1,
      firstName: "Sakil ",
      lastName: "Jomadder",
      username: "sakiljomadder",
      email: "sakiljomadder@mail.com",
      status: "active",
      avatar: img,
    },
    {
      id: 2,
      firstName: "Rasel",
      lastName: "Jomadder",
      username: "raseljomadder",
      email: "raseljomadder@mail.com",
      status: "inactive",
      avatar: img,
    },
    {
      id: 3,
      firstName: "Monir",
      lastName: "Jomadder",
      username: "monirjomadder",
      email: "monirjomadder@mail.com",
      status: "pending",
      avatar: img,
    },
    {
      id: 4,
      firstName: "Jolil",
      lastName: "Jomadder",
      username: "joliljomadder",
      email: "joliljomadder@mail.com",
      status: "active",
      avatar: img,
    },
    {
      id: 5,
      firstName: "Kobir",
      lastName: "Jomaddder",
      username: "kobirjomadder",
      email: "kobirjomadder@mail.com",
      status: "pending",
      avatar: img,
    },
    {
      id: 6,
      firstName: "Jahangir",
      lastName: "Jomadder",
      username: "jahangirjomadder",
      email: "jahangirjomadder@mail.com",
      status: "pending",
      avatar: img,
    },
  ];
  return (
    <section className="users">
      <h3 className="pageTitle">User List</h3>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          checkboxSelection
        />
      </div>
    </section>
  );
}
