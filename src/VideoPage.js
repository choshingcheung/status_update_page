import React from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom

const VideoPage = () => {
  return (
    <div className="video-container">
      <h1>We've prepared a video for you...</h1>
      <video autoPlay muted controls>
        <source src="" type="video/mp4" /> 
        Your browser does not support the video tag.
      </video>
      <Link to="/next-steps">
        <button style={{ marginTop: '20px' }}>View Next Steps</button> 
      </Link>
    </div>
  );
};

export default VideoPage;
