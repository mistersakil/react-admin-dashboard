import "./widgetLg.css";
import thumbnail1 from "../../images/sujan2.jpg";
import thumbnail2 from "../../images/iftakherh.jpg";
import thumbnail3 from "../../images/sakil.jpg";
import thumbnail4 from "../../images/sakil2.jpg";
import thumbnail5 from "../../images/sakil3.jpg";
const articles = [
  {
    id: 1,
    title: "Article one and one again",
    createdAt: "23 June 2021",
    status: "approved",
    thumbnail: thumbnail1,
  },
  {
    id: 1,
    title: "Article two and two again",
    createdAt: "24 June 2021",
    status: "declined",
    thumbnail: thumbnail2,
  },
  {
    id: 1,
    title: "Article three and three again",
    createdAt: "25 June 2021",
    status: "pending",
    thumbnail: thumbnail3,
  },
  {
    id: 1,
    title: "Article four and four again",
    createdAt: "25 June 2021",
    status: "pending",
    thumbnail: thumbnail4,
  },
  {
    id: 1,
    title: "Article five and five again",
    createdAt: "25 June 2021",
    status: "pending",
    thumbnail: thumbnail5,
  },
  {
    id: 1,
    title: "Article six and six again",
    createdAt: "25 June 2021",
    status: "pending",
    thumbnail: thumbnail1,
  },
];
let articlesMapped = articles.map(
  ({ id, title, createdAt, status, thumbnail }, index) => {
    return (
      <tr className="widgetLgArticle" key={id}>
        <td className="title">
          <a href="/">{title}</a>
        </td>

        <td className="createdAt dNoneXs">{createdAt}</td>
        <td>
          <span className={"status " + status}> {status}</span>
        </td>
        <td className="dNone">
          <img
            className="thumbnail"
            src={thumbnail}
            alt={thumbnail + "_" + id}
          />
        </td>
      </tr>
    );
  }
);
export default function WidgetLg() {
  return (
    <section className="widgetLg">
      <h3 className="widgetLgTitle">Latest Article</h3>
      <table className="widgetLgTable">
        <thead>
          <tr>
            <th>Title</th>
            <th className="dNoneXs">CreatedAt</th>
            <th>Status</th>
            <th className="dNone">Image</th>
          </tr>
        </thead>
        <tbody>{articlesMapped}</tbody>
      </table>
    </section>
  );

  <h2></h2>;
}
