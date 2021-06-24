import "./chart.css";
import { Line, Bar } from "react-chartjs-2";
export default function LineChart() {
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "sales for 2020 (K)",
        data: [8, 3, 8, 3, 8, 3, 9.5, 3, 8, 3, 8, 3],
      },
      {
        label: "sales for 2019 (K)",
        data: [2, 6, 2, 6, 2, 6, 0.5, 6, 2, 6, 2, 6],
        borderColor: "rgba(200,100,100,.5)",
      },
    ],
  };
  return (
    <div className="chart">
      <h2 className="chartTitle">Sales Analytics</h2>
      <div className="chartContent">
        <Line
          data={data}
          height={400}
          options={{
            maintainAspectRatio: false,
            indexAxis: "x",
            scales: {
              y: {
                beginAtZero: true,
              },
            },
          }}
        />
      </div>
    </div>
  );
}
