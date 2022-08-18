import React, { useState } from "react"; 

const PasswordGenerator = () => {
  const [password, setPassword] = useState(0);
  const generatepassword = () => {
    let x = Math.random()*10000000;
    console.log(Math.floor(x));
    setPassword(Math.floor(x));
  };
  return (
    <>
      <h3>
        Use the Strong Password Generator to create highly secure passwords that
        are difficult to crack or guess.Just select the criteria for the
        passwords you need and copy and paste.
      </h3>
      <h1>
        Your Generated Password is: <span>{password}</span>
      </h1>

      <button onClick={generatepassword}>Generate PASSword</button>
    </>
  );
};

export default PasswordGenerator;
