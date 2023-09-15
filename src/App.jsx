import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Error from './pages/Error';
import TopNavBar from './components/Header';



function App() {
  return (
    <Router>
     
      <TopNavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
      </Routes>
   
    </Router>
  );
}

export default App;
