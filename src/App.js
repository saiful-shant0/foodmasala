
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Banner from './Home/Banner/Banner';
import Header from './Home/Header/Header';
import Home from './Home/Home';
import Login from './Login/Login/Login'
import Registration from './Login/Registration/Registration';


function App() {
  return (



    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route exact path="/" element={<Home />} />

        <Route path="/login" element={<Login></Login>} />
        <Route path="/registration" element={<Registration></Registration>} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
