import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './components/login/Login';
import Animal from './pages/Animal/Animal';
import Donation from './pages/Donation/Donation';
import Home from './pages/Home/Home';
import Report from './pages/Report/Report';
import User from './pages/User/User';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/usuario' element={<User />} />
        <Route path='/relatorio' element={<Report />} />
        <Route path='/doacao' element={<Donation />} />
        <Route path='/animal' element={<Animal />} />
      </Routes>
    </Router>
  );
}

export default App;
