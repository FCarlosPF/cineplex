import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import "./pieChartBox.scss";

const data = [
  { name: "Cineplanet", value: 55.2, color: "#0088FE" },
  { name: "Cinemark", value: 19.1, color: "#00C49F" },
  { name: "Cinestar", value: 10.4, color: "#FFBB28" },
  { name: "Cinerama", value: 5.6, color: "#FF8042" },
  { name: "UVK", value: 2.0, color: "#F41651" },
  { name: "Otros", value: 7.8, color: "green" },
];

const PieChartBox = () => {
  return (
    <div className="pieChartBox">
      <h1>Cines Peruanos</h1>
      <div className="chart">
        <ResponsiveContainer width="99%" height={300}>
          <PieChart>
            <Tooltip
              contentStyle={{ background: "white", borderRadius: "5px" }}
            />
            <Pie
              data={data}
              innerRadius={"70%"}
              outerRadius={"90%"}
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((item) => (
                <Cell key={item.name} fill={item.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="options">
        {data.map((item) => (
          <div className="option" key={item.name}>
            <div className="title">
              <div className="dot" style={{ backgroundColor: item.color }} />
              <span>{item.name}</span>
            </div>
            <span>{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PieChartBox;
