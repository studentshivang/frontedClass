import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const Home = () => {
  // api calling for getting
  // logged in user details  e.g. current api
  // const [object, setObject] = useState({
  //   name: "Satyam Mishra",
  //   position: "App Developer",
  //   profileviews: 0,
  //   impressions: 0,
  // });

  // const [nAme,setNAme]=useState("Satyam Mishra")
  // const handleclick = () => {
  //   setObject({ ...object, name: "Ashutosh" });
  //   alert(object.name);
  // };

  // return (
  //   <>
  //     <h1>{object.name} </h1>
  //     <p>{object.position}</p>
  //     <p>Who viewed your profile : {object.profileviews} </p>
  //     <p>Imprssions on your post : {object.impressions} </p>
  //     <button
  //       onClick={handleclick}
  //       className="btn btn-primary"
  //     >
  //       Change
  //     </button>
  // </>
  // );

  let [val, setVal] = useState(0);
  let [started, setStarted] = useState(false);
  const [interval_id, setIId] = useState(0);

  function startTimer() {
    if (started === false) {
      setStarted(true);
      let myInterval = setInterval(changeVal, 1000);
      setIId(myInterval);
    } else {
      toast.error("Already started!");
    }
  }
  const changeVal = () => {
    setVal(++val);
    console.log(val);
  };
  return (
    <>
      <div className="mt-5">
        <ToastContainer />
        <h1>{val}</h1>

        <button className="btn btn-success" onClick={startTimer}>
          start
        </button>
        {"    "}
        <button
          className="btn btn-danger"
          onClick={() => {
            clearInterval(interval_id);
            setStarted(false);
          }}
        >
          stop
        </button>
        <br />
        <br />
        <button
          className="btn btn-info"
          onClick={() => {
            setVal(0);
            clearInterval(interval_id);
            setStarted(false);
          }}
        >
          Reset
        </button>
      </div>
    </>
  );
};

export default Home;
