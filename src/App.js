// App.js
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.tsx';
import RecommendAnything from './pages/RecommendAnything.tsx';
import RecommendMood from './pages/RecommendMood.tsx';
import WatchHistory from './pages/WatchHistory.tsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recommend-anything" element={<RecommendAnything />} />
        <Route path="/recommend-mood" element={<RecommendMood />} />
        <Route path="/watch-history" element={<WatchHistory />} />
      </Routes>
    </Router>
  );
}

export default App;
