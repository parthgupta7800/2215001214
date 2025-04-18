import React from "react";
import "./TopUsers.css";

const TopUsers = ({ users }) => {
  return (
    <div className="card top-users">
      <h3>Top Users</h3>
      <ul>
        {users.map((user, idx) => (
          <li key={idx}>
            <img src={user.avatar} alt={user.name} />
            <span>{user.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopUsers;
