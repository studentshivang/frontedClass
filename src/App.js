import React, { useState } from 'react';
import "./App.css";
import Timer from './components/Timer';
import PasswordGenerator from './components/PasswordGenerator';
import Clock from './components/Clock';
import Practicetest from './components/PracticeTest';


function App() {
  const [title,setTitle] = useState("The Big Bang Theory")
  return (
    <div className="App">
      <Practicetest title={title}/>
      {/* <PasswordGenerator/> */}
      {/* <Clock/> */}
      {/* <Timer/> */}
      {/* <h1>Hello from parent component</h1> */}
      {/* <Navbar />
      <Center />
      <ListComp />
      <Form />
      <Footer /> */}
    </div>
  );
}

export default App;
