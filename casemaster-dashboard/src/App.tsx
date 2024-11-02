import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Logbook from "./pages/Logbook";
import FromEmail from "./pages/FromEmail";
import ManualInput from "./pages/ManualInput";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="flex">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content Area */}
        <div className="flex-1 p-7 h-screen overflow-auto">
<Routes>
                      <Route path="/" element={<Dashboard />} />
            <Route path="/logbook" element={<Logbook />} />
            <Route path="/from-email" element={<FromEmail />} />
            <Route path="/manual-input" element={<ManualInput />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;

