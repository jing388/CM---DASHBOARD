import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import FromEmail from "./pages/Logbook/FromEmail";
import ManualInput from "./pages/Logbook/ManualInput";
import Mails from "./pages/Mails/Mails";
import Inbox from "./pages/Mails/Inbox";
import Starred from "./pages/Mails/Starred";
import Sent from "./pages/Mails/Sent";
import Archive from "./pages/Mails/Archive";
import Attachments from "./pages/Attachment";
import CaseTracker from "./pages/CaseTracker";
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
            <Route path="/from-email" element={<FromEmail />} />
            <Route path="/manual-input" element={<ManualInput />} />
            <Route path="/mails" element={<Mails />} />
            <Route path="/inbox" element={<Inbox />} />
            <Route path="/starred" element={<Starred />} />
            <Route path="/sent" element={<Sent />} />
            <Route path="/archive" element={<Archive />} />
            <Route path="/attachments" element={<Attachments />} />
            <Route path="/case-tracker" element={<CaseTracker />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
