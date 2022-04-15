import React, { useState, useEffect } from "react";
import CardUsers from "../../components/Cards/CardUsers";
import Admin from "../../components/Layout/Admin";
import axiosInstance from "../../utils/axiosInstance";

export default function Users() {
  const [users, setUsers] = useState([]);

  axiosInstance
    .get("/")
    .then((users) => {
      setUsers(users);
      console.log("users", users);
    })
    .catch((err) => {
      console.log(err);
    });

  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-1">
          {users && users.length > 0 ? (
            users.map((user, i) => {
              const { email, displayName, role } = user;
              return <CardUsers key={i} />;
            })
          ) : (
            <h1>No users found</h1>
          )}
        </div>
        <div className="w-full mb-12 px-1">
          {/* <CardTable color="dark" /> */}
        </div>
      </div>
    </>
  );
}

Users.layout = Admin;
