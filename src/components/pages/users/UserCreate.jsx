import "./userCreate.css";
import Layout from "../Layout";
import CreateTextbox from "./CreateTextbox";
import CreateSelectBox from "./CreateSelectBox";
import CreateRadioBox from "./CreateRadioBox";
import avatar from "../../../images/avatar.png";
import { Publish } from "@material-ui/icons";
export default function UserCreate(props) {
  return (
    <Layout {...props}>
      <section className="userCreate">
        <h3 className="title3">Create A New User</h3>
        <form className="userCreateForm">
          <aside className="formItemContainer">
            <CreateTextbox name="First Name" />
            <CreateTextbox name="Last Name" />
            <CreateTextbox name="Email" />
            <CreateTextbox name="Username" />
            <CreateTextbox name="Password" type="password" />
            <CreateTextbox name="Mobile" />
            <CreateTextbox name="Address" />
            <CreateRadioBox />
            <CreateSelectBox
              name="User Role"
              values={["Administrator", "Editor", "Author", "User"]}
            />
            <CreateSelectBox
              name="Designation"
              values={[
                "Managing Director",
                "Manager",
                "Project Manager",
                "Team Leader",
                "Software Engineer",
              ]}
            />
          </aside>
          <aside className="formFile">
            <div className="fileUpload">
              <img src={avatar} alt="userAvatarUpload" className="avatar" />
              <label htmlFor="uploadAvatar" title="Upload User Profile Picture">
                <Publish className="icon" />
              </label>
              <input
                type="file"
                name="uploadAvatar"
                id="uploadAvatar"
                style={{ display: "none" }}
              />
            </div>
            <div className="createBtn">
              <button type="submit" className="btn">
                Save
              </button>
            </div>
          </aside>
        </form>
      </section>
    </Layout>
  );
}
