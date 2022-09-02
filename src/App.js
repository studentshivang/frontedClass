// import React, { useState } from 'react';
import React from 'react';
import "./App.css";
// import Timer from './components/Timer';
// import PasswordGenerator from './components/PasswordGenerator';
// import Clock from './components/Clock';
// import Practicetest from './components/PracticeTest';
// import Months from './components/Months';
// import CondComp from './components/CondComp';
// import Increment from './components/Increment';
// import ArrayMapping from './components/ArrayMapping';
// import Form from './components/Form';
import News from './components/News';

function App() {
  // const [title,setTitle] = useState("The Big Bang Theory")
  return (
    <div className="App">
      <News/>
      {/* <OnlineUsers/> */}
      {/* <Form/> */}
      {/* <ArrayMapping/> */}
      {/* <Increment/> */}
      {/* <CondComp/> */}
      {/* <Months/> */}
      {/* <Practicetest title={title}/> */}
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
