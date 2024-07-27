import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import AboutUs from './pages/AboutUs';
import { AuthProvider } from './context/AuthContext';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <AuthProvider>
         <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/aboutus' element={<AboutUs/>}/>
        <Route path='/userprofile' element={<UserProfile/>}/>
      </Routes>
      <Footer/>
    </Router>
    </AuthProvider>
   
  )
}

export default App
