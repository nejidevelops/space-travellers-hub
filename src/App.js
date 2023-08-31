import { Route, Routes } from 'react-router-dom';
import './App.css';
import Missions from './components/Missions';
import Rockets from './components/Rockets';
import Navbar from './components/Navbar';
import MyProfile from './components/Profile';

function App() {
  return (
    <main className="App">
      <Navbar />
      <Routes>
        <Route element={<Rockets />} path="/" />
        <Route element={<MyProfile />} path="/profile" />
        <Route element={<Missions />} path="/missions" />
      </Routes>
    </main>
  );
}

export default App;
