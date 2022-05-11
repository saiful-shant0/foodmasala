
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Header from './Pages/Shared/Header/Header';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login'
import Registration from './Pages/Login/Registration/Registration';
import Allfoods from './Pages/Home/Allfoods/Allfoods';
import AuthProvider from './context/AuthProvider/AuthProvider';
import Orders from './Pages/Orders/Orders';
import Footer from './Pages/Shared/Footer/Footer';


function App() {
  return (

    <AuthProvider>

      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route path="/allfoods" element={<Allfoods />} />
          <Route path="/food/:id" element={<Orders />} />
          <Route path="/login" element={<Login></Login>} />
          <Route path="/registration" element={<Registration></Registration>} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </AuthProvider>

  );
}

export default App;
