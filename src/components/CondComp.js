import React, { useEffect, useState } from "react";

const CondComp = () => {
  const [isComplete, setisComplete] = useState(false);
  useEffect(() => {
    // Api calling
    setisComplete(true);
  }, []);
  return (
    <>
      <div>
        {isComplete === true ? (
          <>
            <h1>Radhedaas</h1>
            <p>Location:Farrukhabaad</p>
          </>
        ) : (
          <>
            <h1>Your Profile is incomplete</h1>
            <p>Complete Profile Information</p>
          </>
        )}
        <button onClick={() => setisComplete(!isComplete)}>Edit Profile</button>
      </div>
    </>
  );
};
export default CondComp;
