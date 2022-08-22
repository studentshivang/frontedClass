import React, { useState } from "react";
function Form() {
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  return (
    <div>
      <form className="my-3">
        <h1><label htmlFor="name">Enter your full name:</label></h1>
        {" "}
        <input type="text" placeholder="Full name" value={name} onChange={(e)=>setName(e.target.value)}/>
        <h1><label htmlFor="name">Enter your email id:</label></h1>
        {" "}
        <input type="email" placeholder="Your Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <h1><label htmlFor="name">Create Password:</label></h1>
        {" "}
        <input type="password" placeholder="Your Email" value={password} onChange={(e)=>setPassword(e.target.value)}/>
      </form>
      <div className="display">
        <h4>Name: {name}</h4>
        <h4>Email: {email}</h4>
        <h4>Password: {password}</h4>
      </div>
    </div>
  );
}

export default Form;

//   import React from 'react';
// function Form() {
//     return (
//       <div className="Form bg-light">
//         <h2 className='text-center text-uppercase py-3'>Contact</h2>
//         <form className="row g-3  mx-5 py-3">
//   <div className="col-md-6">
//     <label for="inputEmail4" className="form-label">Email</label>
//     <input type="email" className="form-control" id="inputEmail4"/>
//   </div>
//   <div className="col-md-6">
//     <label for="inputPassword4" className="form-label">Password</label>
//     <input type="password" className="form-control" id="inputPassword4"/>
//   </div>
//   <div className="col-12">
//     <label for="inputAddress" className="form-label">Address</label>
//     <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
//   </div>
//   <div className="col-12">
//     <label for="inputAddress2" className="form-label">Address 2</label>
//     <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
//   </div>
//   <div className="col-md-6">
//     <label for="inputCity" className="form-label">City</label>
//     <input type="text" className="form-control" id="inputCity"/>
//   </div>
//   <div className="col-md-4">
//     <label for="inputState" className="form-label">State</label>
//     <select id="inputState" className="form-select">
//       <option selected>Choose...</option>
//       <option>...</option>
//     </select>
//   </div>
//   <div className="col-md-2">
//     <label for="inputZip" className="form-label">Zip</label>
//     <input type="text" className="form-control" id="inputZip"/>
//   </div>
//   <div className="col-12">
//     <div className="form-check">
//       <input className="form-check-input" type="checkbox" id="gridCheck"/>
//       <label className="form-check-label" for="gridCheck">
//         Check me out
//       </label>
//     </div>
//   </div>
//   <div className="col-12">
//     <button type="submit" className="btn btn-primary">Sign in</button>
//   </div>
// </form>
//       </div>
//     );
//   }

//   export default Form;
