import "./users.css";
import { useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import img from "../../../images/sakil.jpg";
import { FiberManualRecord, Edit, DeleteForever } from "@material-ui/icons";
import { Link } from "react-router-dom";
import Layout from "../Layout";
export default function Users(props) {
  useEffect(() => {
    document.title = `Users - ${process.env.REACT_APP_BRAND}`;
  }, []);
  const columns = [
    { field: "id", headerName: "ID", flex: 0.6 },
    { field: "firstName", headerName: "First name", flex: 1 },
    { field: "lastName", headerName: "Last name", flex: 1 },
    { field: "username", headerName: "Username", flex: 1 },
    { field: "email", headerName: "Email", flex: 1.4 },
    {
      field: "avatar",
      headerName: "Avatar",

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
      flex: 0.8,
    },
    {
      field: "status",
      headerName: "Actions",
      width: 150,
      renderCell: (fields) => {
        const { status, id } = fields.row;
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
              <Link to={`/users/delete/${id}`} className="deleteLink">
                <DeleteForever />
              </Link>
            </span>
          </>
        );
      },
      flex: 0.8,
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
    {
      id: 7,
      firstName: "Babu",
      lastName: "Jomadder",
      username: "babujomadder",
      email: "babujomadder@mail.com",
      status: "inactive",
      avatar: img,
    },
    {
      id: 8,
      firstName: "Liza",
      lastName: "Jomadder",
      username: "lizajomadder",
      email: "lizajomadder@mail.com",
      status: "active",
      avatar: img,
    },
    {
      id: 9,
      firstName: "Alamgir",
      lastName: "Jomadder",
      username: "alamgirjomadder",
      email: "alamgirjomadder@mail.com",
      status: "inactive",
      avatar: img,
    },
    {
      id: 10,
      firstName: "Emraj",
      lastName: "Jomadder",
      username: "emrajjomadder",
      email: "emrajjomadder@mail.com",
      status: "pending",
      avatar: img,
    },
    {
      id: 11,
      firstName: "Moon",
      lastName: "Jomadder",
      username: "moonjjomadder",
      email: "moonjomadder@mail.com",
      status: "active",
      avatar: img,
    },
  ];
  // const { hasBreadcrumb, pageTitle } = props;

  return (
    <Layout {...props}>
      <section className="users">
        <div style={{ height: "85vh", width: "100%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={7}
            checkboxSelection
          />
        </div>
      </section>
    </Layout>
  );
}
