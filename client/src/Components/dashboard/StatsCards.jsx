import "./StatsCards.css";
import { FaMicrochip, FaMemory, FaHdd, FaHeartbeat } from "react-icons/fa";

function StatsCards() {
  const stats = [
    {
      title: "CPU Usage",
      value: "28%",
      icon: <FaMicrochip />,
    },
    {
      title: "Memory Usage",
      value: "63%",
      icon: <FaMemory />,
    },
    {
      title: "Disk Usage",
      value: "41%",
      icon: <FaHdd />,
    },
    {
      title: "Health Score",
      value: "96%",
      icon: <FaHeartbeat />,
    },
  ];

  return (
    <div className="stats-grid">
      {stats.map((item, index) => (
        <div className="stats-card" key={index}>
          <div className="stats-icon">{item.icon}</div>

          <h3>{item.title}</h3>

          <h1>{item.value}</h1>
        </div>
      ))}
    </div>
  );
}

export default StatsCards;