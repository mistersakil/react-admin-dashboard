import React from "react";
import {
  VictoryBar,
  VictoryChart,
  VictoryLine,
  VictoryTheme,
  VictoryContainer,
} from "victory";
const data = [
  { quarter: 1, earnings: 13000 },
  { quarter: 2, earnings: 1500 },
  { quarter: 3, earnings: 14250 },
  { quarter: 4, earnings: 19000 },
];
export default function ChartVictory() {
  return (
    <div className="chart">
      <h2 className="chartTitle">Sales Analytics</h2>
      <div className="chartContent">
        <VictoryChart
          domainPadding={20}
          theme={VictoryTheme.material}
          height={200}
        >
          <VictoryLine
            data={data}
            x="quarter"
            y="earnings"
            interpolation="natural"
            containerComponent={<VictoryContainer responsive={false} />}
          />
        </VictoryChart>
      </div>
    </div>
  );
}
