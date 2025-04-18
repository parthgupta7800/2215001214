import React from "react";
import "./TrendingPosts.css";

const TrendingPosts = ({ posts }) => {
  return (
    <div className="card trending-posts">
      <h3>Trending Posts</h3>
      {posts.map((post, idx) => (
        <div key={idx} className="post">
          <p>{post.content}</p>
          <span>🔥 {post.likes} likes</span>
        </div>
      ))}
    </div>
  );
};

export default TrendingPosts;
