import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DashboardPage from './Pages/Dashboard/DashboardPage';
import MeterReading from './Meter reading/Meterreading';
import BillList  from './Bill List/BillList'


function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/meter-reading" element={<MeterReading />} />
          <Route path="/billList" element={<BillList />} />
          {/* เพิ่มเส้นทางหน้าอื่นที่นี่ */}
        
        </Routes>
    </Router>
  );
}

export default App;
