import "./userUpdate.css";
import Layout from "../Layout";
import { useParams } from "react-router-dom";
import img from "../../../images/iftakherh.jpg";
import { dummyUserRows } from "../../../dummyData";
import UserUpdateItem from "./UserUpdateItem";
import {
  PermIdentity,
  Publish,
  PhoneIphone,
  MailOutline,
  Room,
  CalendarToday,
} from "@material-ui/icons";

function UserUpdate(props) {
  const urlParams = useParams();

  const user = dummyUserRows.filter(
    (user) => user.id === parseInt(urlParams.id)
  )[0];

  return (
    <Layout {...props}>
      <section className="userUpdate">
        {user && (
          <div className="userInfoContainer">
            <h3 className="userInfoTitle title3">User Information</h3>
            <div className="userInfoHeader">
              <img src={user.avatar} alt="userAvatar" className="userAvatar" />
              <div className="userTitle">
                <span className="name">
                  {user.firstName + " " + user.lastName}
                </span>
                <span className="designation">{user.designation}</span>
              </div>
            </div>
            <div className="userInfoFooter">
              <h5 className="footerTitle title5">Account Details</h5>
              <p className="username">
                <PermIdentity className="userInfoIcon" /> {user.username}
              </p>
              <p className="dateOfBirth">
                <CalendarToday className="userInfoIcon" />
                01 Jan 2000
              </p>
              <p className="mobile">
                <PhoneIphone className="userInfoIcon" />
                {user.mobileNo}
              </p>
              <p className="email">
                <MailOutline className="userInfoIcon" />
                {user.email}
              </p>
              <p className="address">
                <Room className="userInfoIcon" />
                Dhaka, Bangladesh
              </p>
            </div>
          </div>
        )}
        <div className="userUpdateContainer">
          <h3 className="userUpdateTitle title3">Edit User Information</h3>
          <div className="userUpdateContent">
            <div className="userUpdateLeft">
              <form className="userUpdateForm">
                <UserUpdateItem label="First Name" value={user.firstName} />
                <UserUpdateItem label="Last Name" value={user.lastName} />
                <UserUpdateItem label="Username" value={user.username} />
                <UserUpdateItem label="Email" value={user.email} />
                <UserUpdateItem label="Mobile" value={user.mobileNo} />
                <UserUpdateItem label="Designation" value={user.designation} />
                <UserUpdateItem
                  type="textarea"
                  label="Address"
                  value={user.address}
                />
              </form>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateFileUpload">
                <img
                  src={user.avatar}
                  alt="avatar"
                  className="userUpdateAvatar"
                />
                <label
                  htmlFor="userUpdateAvatar"
                  title="Upload Profile Picture"
                >
                  <Publish className="icon" />
                </label>
                <input
                  type="file"
                  className="userUpdateAvatar"
                  id="userUpdateAvatar"
                  style={{ display: "none" }}
                />
              </div>
              <button className="userUpdateBtn">Update</button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
export default UserUpdate;
