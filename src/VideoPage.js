import React from 'react';

const VideoPage = () => {
  return (
    <div className="video-container">
      <h1>Video Update</h1>
      <video controls>
        <source src="video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPage;
