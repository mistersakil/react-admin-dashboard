import "./home.css";
import Featured from "../../featured/Featured";
import LineChart from "../../charts/LineChart";
import HomeWidgets from "../../homeWidgets/HomeWidgets";

export default function Home() {
  return (
    <div className="homeContainer">
      <Featured />
      {/* <LineChart /> */}
      <HomeWidgets />
    </div>
  );
}
