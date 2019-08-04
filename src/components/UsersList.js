import React, { Component } from "react";

const UsersList = ({ users }) => {
  console.log(users);

  return (
    <div>
      {users
        ? users.map(user => {
            return <p key={user}>{user}</p>;
          })
        : ""}
    </div>
  );
};

export default UsersList;
