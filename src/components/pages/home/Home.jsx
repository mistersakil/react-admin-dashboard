import "./home.css";
import Featured from "../../featured/Featured";
// import Chart from "../../charts/Chart";
import LineChart from "../../charts/LineChart";
// import ChartVictory from "../../charts/ChartVictory";
export default function Home() {
  return (
    <div className="homeContainer">
      <Featured />
      {/* <LineChart /> */}
    </div>
  );
}
