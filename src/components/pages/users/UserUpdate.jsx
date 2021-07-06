import "./userUpdate.css";
import Layout from "../Layout";
import { useParams } from "react-router-dom";
import img from "../../../images/iftakherh.jpg";
import {
  PermIdentity,
  Schedule,
  PhoneIphone,
  MailOutline,
  Room,
  CalendarToday,
} from "@material-ui/icons";
import { dummyUserRows } from "../../../dummyData";
function UserUpdate(props) {
  const urlParams = useParams();
  console.log(urlParams.id);
  const user = dummyUserRows.filter(
    (user) => user.id === parseInt(urlParams.id)
  )[0];
  console.log(user);
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
        <div className="userUpdateContainer"></div>
      </section>
    </Layout>
  );
}
export default UserUpdate;
