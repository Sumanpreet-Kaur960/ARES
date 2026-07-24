import "./Analytics.css";
import Sidebar from "../Components/layout/Sidebar";
import Navbar from "../Components/layout/Navbar";

function Analytics() {
  return (
    <>
      <Sidebar />

      <div className="dashboard">
        <Navbar />

        <div className="topbar">
          <h1>Analytics Dashboard</h1>
          <p>Monitor system performance and resource usage.</p>
        </div>

        <div className="analytics-grid">

          <div className="analytics-card">
            <h2>CPU Analytics</h2>
            <p>Real-time CPU performance will appear here.</p>
          </div>

          <div className="analytics-card">
            <h2>Memory Analytics</h2>
            <p>Memory usage insights will appear here.</p>
          </div>

          <div className="analytics-card">
            <h2>Disk Analytics</h2>
            <p>Disk activity and storage trends.</p>
          </div>

          <div className="analytics-card">
            <h2>Network Analytics</h2>
            <p>Network traffic monitoring.</p>
          </div>

        </div>

      </div>
    </>
  );
}

export default Analytics;