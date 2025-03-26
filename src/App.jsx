import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DashboardPage from './Pages/Dashboard/DashboardPage';


function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
        </Routes>
    </Router>
  );
}

export default App;
