
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login'
import Registration from './Pages/Login/Registration/Registration';
import Allfoods from './Pages/Home/Allfoods/Allfoods';
import AuthProvider from './context/AuthProvider/AuthProvider';
import Orders from './Pages/Orders/Orders';
import MyOrders from './Pages/Dashboard/MyOrders/MyOrders';
import Review from './Pages/Review/Review';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute'
import { Fragment } from 'react';


function App() {
  return (

    <AuthProvider>

      <BrowserRouter>

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route path="/allfoods" element={<Allfoods />} />
          {/* <Route path="/review" element={<PrivateRoute />} /> */}
          <Route path="/review" element={<PrivateRoute><Review /></PrivateRoute>} />

          <Route path="/food/:id" element={<Orders />} />
          <Route path="/login" element={<Login></Login>} />
          <Route path="/myorders" element={<PrivateRoute><MyOrders></MyOrders> </PrivateRoute>} />
          <Route path="/registration" element={<Registration></Registration>} />

        </Routes>

      </BrowserRouter>
    </AuthProvider>

  );
}

export default App;
