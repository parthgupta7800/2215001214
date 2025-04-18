import React from "react";
import "./RealTimeFeed.css";

const RealTimeFeed = ({ feed }) => {
  return (
    <div className="card feed">
      <h3>Real-time Feed</h3>
      {feed.map((entry, idx) => (
        <div key={idx} className="feed-item">
          <strong>{entry.user}</strong>: {entry.message}
          <span>{entry.time}</span>
        </div>
      ))}
    </div>
  );
};

export default RealTimeFeed;
