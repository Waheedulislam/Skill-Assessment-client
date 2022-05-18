import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Add-btn/Home';
import ShowTask from './Components/Add-btn/ShowTask';
import Header from './Components/Header/Header';
import Login from './Components/Login/Login';
import Register from './Components/Login/Register';
import RequairAuth from './Components/Login/RequairAuth';

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path="/" element={<RequairAuth><Home /></RequairAuth>} />
        <Route path="/home" element={<RequairAuth><Home /></RequairAuth>} />
        <Route path="/show" element={<RequairAuth><ShowTask /></RequairAuth>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
