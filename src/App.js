import './App.css';
import Header from './components/Header';
import Menu from './components/Menu';
import Home from './components/Home';
import ApplicationForm from './components/ApplicationForm';
import EditApplicationForm from './components/EditApplicationForm';
import PlacementDetails from './components/PlacementDetails';
import Fees from './components/Fees';
import ContactUs from './components/ContactUs';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <div style={containerStyle}>
          <div style={leftPanelStyle}>
            <Menu />
          </div>
          <div style={rightPanelStyle}>
            <Routes>
              <Route path="/" Component={Home} exact />
              <Route path="/application-form" Component={ApplicationForm} exact />
              <Route path="/edit-application-form" Component={EditApplicationForm} exact />
              <Route path="/placement-details" Component={PlacementDetails} exact />
              <Route path="/fees" Component={Fees} exact />
              <Route path="/contactus" Component={ContactUs} exact />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

const containerStyle = {
  display: 'flex',
  flexDirection: 'row',
  height: '88.6vh',
};

const leftPanelStyle = {
  flex: '1',
  backgroundColor: '#757575',
  borderBottom: '1px solid #ccc',
  padding: '20px'
};

const rightPanelStyle = {
  flex: '6',
  backgroundColor: '#ffffff',
  padding: '20px'
};

export default App;
