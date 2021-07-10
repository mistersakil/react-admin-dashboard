import "./home.css";
import Featured from "../../featured/Featured";
import LineChart from "../../charts/LineChart";
import HomeWidgets from "../../homeWidgets/HomeWidgets";
import Layout from "../Layout";
export default function Home(props) {
  return (
    <Layout {...props}>
      <div className="homeContainer">
        <Featured />
        <LineChart />
        <HomeWidgets />
      </div>
    </Layout>
  );
}
