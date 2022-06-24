import { BrowserRouter,Routes, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './Hooks/AuthProvider';
import Booking from './Pages/Booking/Booking/Booking';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import NotFound from './Pages/NotFound/NotFound';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Header from './Pages/Shared/Header/Header/Header';

function App() {
  return (
    <div className="App">
     <AuthProvider>
     <BrowserRouter>
     <Header/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/booking/:bookingId" element={<PrivateRoute>
              <Booking/>
            </PrivateRoute>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
     </BrowserRouter>
     </AuthProvider>
    </div>
  );
}

export default App;
