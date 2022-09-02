import React, { useEffect, useState } from "react";
import axios from "axios";

function OnlineUsers() {
  const [users, setUsers] = useState([]);
  const fetchUsers = async () => {
    const response = await axios.get("/allusers");
    if (response.data.success === true) {
      setUsers(response.data.data);
    }else console.log("server Issue");
    console.log(response);
    // setUsers(response.data.data)
  };

  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <>
      <h1>Hello</h1>
      {users.map((ele) => {
        return (
          <>
            <h5 style={{ color: "red" }}>The username: {ele.name}</h5>
            <h5 style={{ color: "blue" }}>The e-mail: {ele.email}</h5>
          </>
        );
      })}
    </>
  );
}

export default OnlineUsers;
