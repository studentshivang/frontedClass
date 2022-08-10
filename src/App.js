import React from 'react';
import "./App.css";
import Navbar from "./components/Navbar";
import Center from "./components/Center";
import Footer from "./components/Footer";
import ListComp from "./components/ListComp";
import Form from "./components/Form";

function App() {
  return (
    <div className="App">
      {/* <h1>Hello from parent component</h1> */}
      <Navbar />
      <Center />
      <ListComp />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
