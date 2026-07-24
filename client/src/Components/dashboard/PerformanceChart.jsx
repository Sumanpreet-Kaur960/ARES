import "./PerformanceChart.css";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
  { name: "Mon", cpu: 22 },
  { name: "Tue", cpu: 35 },
  { name: "Wed", cpu: 28 },
  { name: "Thu", cpu: 45 },
  { name: "Fri", cpu: 39 },
  { name: "Sat", cpu: 58 },
  { name: "Sun", cpu: 41 },
];

function PerformanceChart() {
  return (
    <div className="performance-chart">
      <h2>System Performance</h2>

      <ResponsiveContainer width="100%" height={320}>
        <LineChart data={data}>
          <CartesianGrid stroke="#2d3b5e" strokeDasharray="3 3" />
          <XAxis dataKey="name" stroke="#bfc9e0" />
          <YAxis stroke="#bfc9e0" />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="cpu"
            stroke="#00d4ff"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default PerformanceChart;