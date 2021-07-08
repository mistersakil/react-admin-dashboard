import "./userCreate.css";
import Layout from "../Layout";
import CreateTextbox from "./CreateTextbox";
import CreateSelectBox from "./CreateSelectBox";
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
            <div className="formItem">
              <label className="formItemLabel">Gender</label>
              <article className="formItemRadio">
                <label className="item" htmlFor={`male`}>
                  <input type="radio" name="gender" id="male" />
                  {`male`}
                </label>
                <label className="item" htmlFor={`female`}>
                  <input type="radio" name="gender" id="female" />
                  {`female`}
                </label>
              </article>
            </div>
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
            <button type="submit" className="btn">
              Save
            </button>
          </aside>
        </form>
      </section>
    </Layout>
  );
}
