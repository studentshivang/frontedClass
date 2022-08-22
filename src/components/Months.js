import React, { useState } from "react";

function Months() {
  const getmonthdiff = require("months-between-two-dates");

  let months = getmonthdiff("April 20 271821", "December 20 271821");

  console.log(months);
  return <div className="Months"><ul>{months.map((month)=><li>{month}</li>)}</ul></div>;
}

export default Months;
