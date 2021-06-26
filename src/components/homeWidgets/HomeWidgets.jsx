import "./homeWidgets.css";
import WidgetSm from "./WidgetSm";
import WidgetLg from "./WidgetLg";
export default function HomeWidgets() {
  return (
    <div className="homeWidgets">
      <WidgetSm />
      <WidgetLg />
    </div>
  );
}
