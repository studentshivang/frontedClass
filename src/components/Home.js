import React, { useState } from "react";

const Home = () => {
  // api calling for getting
  // logged in user details  e.g. current api
  const [object, setObject] = useState({
    name: "Satyam Mishra",
    position: "App Developer",
    profileviews: 0,
    impressions: 0,
  });

  const handleclick = () => {
    setObject({ ...object, name: "Ashutosh" });
    console.log(object.name);
  };

  return (
    <>
      <h1>{object.name} </h1>
      <p>{object.position}</p>
      <p>Who viewed your profile : {object.profileviews} </p>
      <p>Imprssions on your post : {object.impressions} </p>
      <button
        onClick={handleclick}
        className="btn btn-primary"
      >
        Change
      </button>
    </>
  );
};

export default Home;
