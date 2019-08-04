import React, { Component } from "react";

const UsersList = ({ users }) => {
  console.log(users);

  return (
    <div>
      {users
        ? users.map(user => {
            return <p key={user.id}>{user.name}</p>;
          })
        : ""}
    </div>
  );
};

export default UsersList;
