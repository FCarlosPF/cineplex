import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "./bigChartBox.scss";

const data = [
  {
    name: "2018",
    beneficio: 134.0,

  },
  {
    name: "2019",
    beneficio: 187.8,

  },
  {
    name: "2020",
    beneficio: 0.9,

  },
  {
    name: "2021",
    beneficio: 0.6,

  },
  {
    name: "2022",
    beneficio: 125.5,

  },
];

const BigChartBox1 = () => {
  return (
    <div className="bigChartBox">
      <h1>EBITDA</h1>
      <div className="chart">
        <ResponsiveContainer width="99%" height="100%">
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="beneficio"
              stackId="1"
              stroke="#ffc658"
              fill="#ffc658"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BigChartBox1;
