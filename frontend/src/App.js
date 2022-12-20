import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './components/login/Login';
import Home from './pages/Home/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<Login />}/>
      </Routes>
    </Router>
  );
}

export default App;
