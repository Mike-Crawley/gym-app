import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Account from "./pages/Account";
import Workouts from "./pages/Workouts";
import Settings from "./pages/Settings";
import BottomNav from "./components/BottomNav";
import TopNav from "./components/TopNav";
import "./css/App.css"

function App() {
  return (
    <Router>
      <div className="app-container">
      {/* <TopNav /> */}
        {/* Page content */}
        <Routes>
          <Route path="/" element={<Account />} />
          <Route path="/workouts" element={<Workouts />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
      <BottomNav />
    </Router>
  );
}

export default App;