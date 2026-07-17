import { Routes, Route } from "react-router-dom";

import Dashboard from "./assets/pages/Dashboard";
import Assessment from "./assets/pages/Assessment";
import Analytics from "./assets/pages/Analytics";
import RecoveryPlan from "./assets/pages/RecoveryPlan";
import Reminders from "./assets/pages/Reminders";
import Profile from "./assets/pages/Profile";
import Settings from "./assets/pages/Settings";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/assessment" element={<Assessment />} />
      <Route path="/analytics" element={<Analytics />} />
      <Route path="/recovery-plan" element={<RecoveryPlan />} />
      <Route path="/reminders" element={<Reminders />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
}

export default App;