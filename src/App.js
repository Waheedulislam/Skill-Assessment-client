import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Add-btn/Home';
import ShowTask from './Components/Add-btn/ShowTask';
import Header from './Components/Header/Header';

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/show" element={<ShowTask />} />
      </Routes>
    </div>
  );
}

export default App;
