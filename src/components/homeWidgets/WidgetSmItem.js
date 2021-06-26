import userProfilePic from "../../images/me3.jpg";
import { Visibility } from "@material-ui/icons";

export default function WidgetSmItem() {
  return (
    <article className="widgetSmItem">
      <img
        src={userProfilePic}
        alt="userProfilePicture"
        className="widgetSmImg"
      />
      <div className="widgetSmUser">
        <h4 className="name">Mister Sakil</h4>
        <small className="designation">Software Engineer</small>
      </div>

      <Visibility className="icon" />
    </article>
  );
}
