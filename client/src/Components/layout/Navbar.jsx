import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">

      <div className="navbar-left">
        <h2>Dashboard</h2>
      </div>

      <div className="navbar-right">
        <input
          type="text"
          placeholder="Search..."
          className="search-box"
        />

        <div className="profile">
          👤 Admin
        </div>
      </div>

    </div>
  );
}

export default Navbar;