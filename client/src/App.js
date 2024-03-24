import './App.css';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Dashboard from './pages/Dashboard';
function App() {
  return (
    <Router>
        <Navbar/>
        <Routes>
          <Route path='/' exact element={<Home/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          {/* <Route path='/about' element={<About/>}/>
          <Route path='/sign-up' element={<SignUp/>}/> */}
        </Routes>
        <Footer/>
      </Router> 
  );
}

export default App;
