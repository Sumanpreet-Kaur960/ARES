import "./AIHealth.css";

function AIHealth() {
  return (
    <div className="ai-health">

      <h2>🤖 AI Health Monitor</h2>

      <div className="health-score">
        <h1>96%</h1>
        <p>Overall System Health</p>
      </div>

      <div className="recommendations">
        <h3>AI Recommendations</h3>

        <ul>
          <li>✔ Close 2 background applications</li>
          <li>✔ Clear temporary cache</li>
          <li>✔ Memory usage is stable</li>
          <li>✔ No recovery required</li>
        </ul>

      </div>

    </div>
  );
}

export default AIHealth;