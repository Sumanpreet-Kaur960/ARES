import { useState } from "react";
import "./Login.css";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="login-container">

      {/* Left Side */}
      <div className="login-left">
        <h1 className="brand">ARES</h1>

        <h2>AI Resource Efficiency & Recovery System</h2>

        <p>
          Intelligent monitoring, real-time analytics, automated recovery,
          and enterprise resource optimization — all in one platform.
        </p>
      </div>

      {/* Right Side */}
      <div className="login-card">
        <h1 className="logo">ARES</h1>

        <p className="subtitle">
          Secure Login
        </p>

        <input
          type="email"
          placeholder="Enter Email"
          className="input-field"
        />

        <div className="password-box">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter Password"
            className="input-field"
          />

          <button
            type="button"
            className="show-btn"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>

        <div className="login-options">
          <label>
            <input type="checkbox" />
            {" "}Remember Me
          </label>

          <a href="#">Forgot Password?</a>
        </div>

        <button className="login-btn">
          Sign In
        </button>
      </div>

    </div>
  );
}

export default Login;