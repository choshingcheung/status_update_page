import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import VideoPage from './VideoPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Default or home route */}
          <Route path="/" element={
            <header className="App-header">
              <h1>ISL Status Update Portal</h1>
              <p>Welcome to ISL's status update portal. Click below to view the latest update.</p>
              <Link to="/video">
                <button>Show Video Update</button>
              </Link>
            </header>
          } />
          {/* Video route */}
          <Route path="/video" element={<VideoPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
