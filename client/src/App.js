import './App.css';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Dashboard from './pages/Dashboard';
import Signup from './pages/Signup';
import About from './pages/About';
import Createpatient from './components/Createpatient';
import Login from './pages/Login';
import Createdoctor from './components/Createdoctor';
import DoctorDashboard from './pages/Doctordashboard';
import Documents from './pages/Documents';
import Createhospital from './components/Createhospital';
import Hospitaldashboard from './pages/Hospitaldashboard';
import ScrollToTop from './components/ScrollToTop';
function App() {
  return (
    <Router>
      <ScrollToTop/>
        <Navbar/>
        <Routes>
          <Route path='/' exact element={<Home/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/doctor-dashboard' element={<DoctorDashboard/>}/>
          <Route path='/hospital-dashboard' element={<Hospitaldashboard/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path="/create-patient" element={<Createpatient/>} />
          <Route path="/create-doctor" element={<Createdoctor/>} />
          <Route path="/create-hospital" element={<Createhospital/>} />
          <Route path="/documents" element={<Documents/>} />
          <Route path='/sign-up' element={<Signup/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
        <Footer/>
      </Router> 
  );
}

export default App;
