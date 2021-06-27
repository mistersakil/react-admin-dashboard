import userProfilePic from "../../images/iftakherh.jpg";
import { Visibility } from "@material-ui/icons";
import img1 from "../../images/sakil2.jpg";
import img2 from "../../images/iftakherh.jpg";
import img3 from "../../images/sujan.jpg";
import img4 from "../../images/sujan2.jpg";
import img5 from "../../images/sakil3.jpg";
export default function WidgetSmItem(props) {
  const widgetItems = [
    {
      img: img1,
      name: "Mister Sakil",
      designation: "React Developer",
    },
    {
      img: img5,
      name: "Mister Limon",
      designation: "React Developer",
    },
    {
      img: img4,
      name: "Mister Imam",
      designation: "JS Developer",
    },
    {
      img: img2,
      name: "Mister Iftakherh",
      designation: "Node.js Developer",
    },
    {
      img: img3,
      name: "Mister Sujan",
      designation: "Graphics Designer",
    },
  ];
  let widgetItemsMapped = widgetItems.map(
    ({ img, name, designation }, index) => {
      return (
        <article className="widgetSmItem" key={index}>
          <img src={img} alt="userProfilePicture" className="widgetSmImg" />
          <div className="widgetSmUser">
            <h4 className="name">{name}</h4>
            <small className="designation">{designation}</small>
          </div>
          <span title="View">
            <Visibility className="icon" />
          </span>
        </article>
      );
    }
  );
  return <>{widgetItemsMapped}</>;
}
