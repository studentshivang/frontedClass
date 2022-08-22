import React, { useEffect, useState } from "react";
const Increment = () => {
  const [counter, setcounter] = useState(0);
  useEffect(() => {
    console.log("counter value changed!");
  }, [counter]);
  function RenderHigh() {
    if (counter < 5) {
      return <p>Low</p>;
    } else if (counter < 10) {
      return <p>Medium</p>;
    } else {
      return <p>High</p>;
    }
  }
  return (
    <div>
      <h1>{counter}</h1>
      {/* <RenderHigh /> */}
      <p>
        {counter > 10 ? "High" : counter > 5 && counter < 10 ? "Medium" : "Low"}
      </p>
      <button
        className="btn btn-primary"
        onClick={() => setcounter(counter + 1)}
      >
        Increment
      </button>
    </div>
  );
};
export default Increment;
