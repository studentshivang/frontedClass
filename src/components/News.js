import React, { useEffect, useState } from "react";
import axios from "axios";

function OnlineNews() {
  const [news, setNews] = useState([]);
  const fetchNews = async () => {
    const response = await axios.get("/allposts");
    if (response.data.success === true) {
      setNews(response.data.data);
    }else console.log("server Issue");
    console.log(response);
    // setNews(response.data.data)
  };

  useEffect(() => {
    fetchNews();
  }, []);
  return (
    <>
      <h1>Hello</h1>
      {news.map((ele) => {
        return (
          <>
            <h5 style={{ color: "red" }}>The title: {ele.posttitle}</h5>
            <h5 style={{ color: "blue" }}>The likes: {ele.likes}</h5>
          </>
        );
      })}
    </>
  );
}

export default OnlineNews;
