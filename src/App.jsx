import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Error from './pages/Error';
import TopNavBar from './components/Header';
import LeftSideBar from './components/LeftSideBar';


function App() {
  return (
    <Router>
     <LeftSideBar />
      <TopNavBar />
     
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/user/:id" element={<Home />} />
        <Route path="*" element={<Error />} />
      </Routes>
   
    </Router>
  );
}

export default App;
