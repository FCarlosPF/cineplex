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
      cineplanet: 0.9,
      otros: 7.9
    },
    {
      name: "2019",
      cineplanet: 8.9,
      otros: 8.3
    },
    {
      name: "2020",
      cineplanet: 8.2,
      otros: 7.4
    },
    {
      name: "2021",
      cineplanet: 13.0,
      otros: 13.3
    },
    {
      name: "2022",
      cineplanet: 12.3,
      otros: 12.3
    }
  ];
  
  const BigChartBox2 = () => {
    return (
      <div className="bigChartBox">
        <h1>TARIFA</h1>
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
                dataKey="cineplanet"
                stackId="1"
                stroke="#8884d8"
                fill="#8884d8"
              />
              <Area
                type="monotone"
                dataKey="otros"
                stackId="1"
                stroke="#82ca9d"
                fill="#82ca9d"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  };
  
  export default BigChartBox2;
  