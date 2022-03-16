
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Header from './Pages/Shared/Header/Header';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login'
import Registration from './Pages/Login/Registration/Registration';


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
