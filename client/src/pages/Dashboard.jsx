import "./Dashboard.css";
import Sidebar from "../Components/layout/Sidebar";
import Navbar from "../Components/layout/Navbar";
import StatsCards from "../Components/dashboard/StatsCards";
import PerformanceChart from "../Components/dashboard/PerformanceChart";
import AIHealth from "../Components/dashboard/AIHealth";
function Dashboard() {
  return (
    <>
      <Sidebar />

      <div className="dashboard">
        <Navbar />

        <div className="topbar">
          <h1>ARES Dashboard</h1>
          <p>AI Resource Efficiency & Recovery System</p>
        </div>

        {/* Top Cards */}
        <StatsCards/>
       {/* <PerformanceChart/>*/}
        {/* Graph Section */}
        <div className="graph-placeholder">
          <div className="graph-bars">
            <div className="bar bar1"></div>
            <div className="bar bar2"></div>
            <div className="bar bar3"></div>
            <div className="bar bar4"></div>
            <div className="bar bar5"></div>
            <div className="bar bar6"></div>
          </div>
        </div>

        {/* Status Cards */}
        <div className="status-section">
          <div className="status-card">
            <h3>🟢 Active Servers</h3>
            <h2>24</h2>
          </div>

          <div className="status-card">
            <h3>⚠ Warnings</h3>
            <h2>03</h2>
          </div>

          <div className="status-card">
            <h3>❌ Critical Alerts</h3>
            <h2>01</h2>
          </div>

          <div className="status-card">
            <h3>⚡ Recovery Tasks</h3>
            <h2>12</h2>
          </div>
        </div>
        <AIHealth />
      </div>
    </>
  );
}

export default Dashboard;