import React, { useEffect } from "react";
import axios from "axios";

function OnlineUsers() {

    const fetchUsers=async()=>{
        const response=await axios.get('/allusers');
        console.log(response);
    }

    useEffect(()=>{
       fetchUsers();
    },[])
  return (
    <>
      <h1>Hello</h1>
    </>
  );
}

export default OnlineUsers;
