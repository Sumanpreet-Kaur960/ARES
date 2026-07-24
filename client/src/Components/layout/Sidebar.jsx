import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <h2 className="logo">ARES</h2>

      <ul className="menu">
        <li className="active">🏠 Dashboard</li>
        <li>📊 Analytics</li>
        <li>🤖 AI Monitor</li>
        <li>🛠 Recovery</li>
        <li>🔔 Alerts</li>
        <li>⚙ Settings</li>
        <li>👤 Profile</li>
      </ul>
    </div>
  );
}

export default Sidebar;