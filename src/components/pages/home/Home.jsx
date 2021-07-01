import { useEffect } from "react";
import "./home.css";
import Featured from "../../featured/Featured";
import LineChart from "../../charts/LineChart";
import HomeWidgets from "../../homeWidgets/HomeWidgets";

export default function Home() {
  useEffect(() => {
    document.title = `${process.env.REACT_APP_BRAND}`;
  }, []);
  return (
    <div className="homeContainer">
      <Featured />
      {/* <LineChart /> */}
      <HomeWidgets />
    </div>
  );
}
