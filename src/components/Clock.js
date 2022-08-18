import React, { useState } from "react";

const Practice = () => {
//   var today = new Date();
//   var time =
//     today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    const [currTime,setCurrTime] =useState(new Date().toLocaleTimeString())
    setInterval(()=>setCurrTime(new Date().toLocaleTimeString()),1000)
  return (
    <div className="practice">
      <h1>
        Current Time is: <br /> <span>{currTime}</span>
      </h1>
    </div>
  );
};

export default Practice;
