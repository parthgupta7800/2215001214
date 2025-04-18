import React from "react";
import TopUsers from "./TopUsers";
import TrendingPosts from "./TrendingPosts";
import RealTimeFeed from "./RealTimeFeed";
import "./Dashboard.css";

const Dashboard = () => {
    const users = [
        { name: "John Doe", avatar: "https://i.pravatar.cc/30?img=1" },
        { name: "Helen Moore", avatar: "https://i.pravatar.cc/30?img=2" },
        { name: "Ivy Taylor", avatar: "https://i.pravatar.cc/30?img=3" },
        { name: "Jack Anderson", avatar: "https://i.pravatar.cc/30?img=4" },
        { name: "Kathy Thomas", avatar: "https://i.pravatar.cc/30?img=5" },
        { name: "Liam Jackson", avatar: "https://i.pravatar.cc/30?img=6" },
        { name: "Mona Harris", avatar: "https://i.pravatar.cc/30?img=7" },
        { name: "Nathan Clark", avatar: "https://i.pravatar.cc/30?img=8" },
        { name: "Olivia Lewis", avatar: "https://i.pravatar.cc/30?img=9" },
        { name: "Paul Walker", avatar: "https://i.pravatar.cc/30?img=10" },
        { name: "Quinn Scott", avatar: "https://i.pravatar.cc/30?img=11" },
        { name: "Jane Doe", avatar: "https://i.pravatar.cc/30?img=12" },
        { name: "Rachel Young", avatar: "https://i.pravatar.cc/30?img=13" },
        { name: "Alice Smith", avatar: "https://i.pravatar.cc/30?img=14" },
        { name: "Bob Jhonson", avatar: "https://i.pravatar.cc/30?img=15" },
        { name: "Charlie Brown", avatar: "https://i.pravatar.cc/30?img=16" },
        { name: "Diana White", avatar: "https://i.pravatar.cc/30?img=17" },
        { name: "Edward Davis", avatar: "https://i.pravatar.cc/30?img=18" },
        { name: "Fiona Miller", avatar: "https://i.pravatar.cc/30?img=19" },
        { name: "George Wilson", avatar: "https://i.pravatar.cc/30?img=20" },
      ];
      

  const posts = [
    { id: 246, content: "Post about ant", likes: 134 },
    { id: 161, content: "Post about elephant", likes: 198 },
    { id: 150, content: "Post about ocean", likes: 125 },
    { id: 370, content: "Post about monkey", likes: 112 },
    { id: 344, content: "Post about ocean", likes: 101 },
    { id: 952, content: "Post about zebra", likes: 143 },
    { id: 647, content: "Post about igloo", likes: 108 },
    { id: 421, content: "Post about house", likes: 99 },
    { id: 890, content: "Post about bat", likes: 157 },
    { id: 461, content: "Post about umbrella", likes: 132 },
  ];

  const feed = [
    { user: "Dan", message: "Posted a new blog!", time: "2 mins ago" },
    { user: "Eva", message: "Liked a post", time: "5 mins ago" },
  ];

  return (
    <div className="dashboard">
      <TopUsers users={users} />
      <TrendingPosts posts={posts} />
      <RealTimeFeed feed={feed} />
    </div>
  );
};

export default Dashboard;
