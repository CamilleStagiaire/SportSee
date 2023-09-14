import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Error from './pages/Error';
import TopNavBar from './components/Header';
import { UserProfileProvider } from './contexts/UserProfileContext';


function App() {
  return (
    <Router>
      <UserProfileProvider>
      <TopNavBar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
      </Routes>
      </UserProfileProvider>
    </Router>
  );
}

export default App;
