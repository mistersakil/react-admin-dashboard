import "./featured.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
export default function Featured() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <h3 className="featuredTitle">Sales</h3>
        <div className="featuredContent">
          <span>$30000</span>
          <span>-15.5</span>
          <ArrowDownward className="featuredIcon negative" />
        </div>
        <p className="featuredInfo">Compared to last month</p>
      </div>
      <div className="featuredItem">
        <h3 className="featuredTitle">Revenue</h3>
        <div className="featuredContent">
          <span>$40000</span>
          <span>-11.9</span>
          <ArrowDownward className="featuredIcon negative" />
        </div>
        <p className="featuredInfo ">Compared to last month</p>
      </div>
      <div className="featuredItem">
        <h3 className="featuredTitle">Cost</h3>
        <div className="featuredContent">
          <span>$20000</span>
          <span>+15.5</span>
          <ArrowUpward className="featuredIcon " />
        </div>
        <p className="featuredInfo">Compared to last month</p>
      </div>
    </div>
  );
}
