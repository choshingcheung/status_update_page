import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import VideoPage from './VideoPage';
import NextStepsPage from './NextStepsPage';  // Import the new component
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={
            <header className="App-header">
              <h1>ISL Status Update Portal</h1>
              <p>Welcome to ISL's status update portal. Click below to view the latest update.</p>
              <Link to="/video">
                <button>Show Status Update</button>
              </Link>
            </header>
          } />
          <Route path="/video" element={<VideoPage />} />
          <Route path="/next-steps" element={<NextStepsPage />} />  {/* New route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
