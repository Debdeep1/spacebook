import React, { useState, useEffect } from "react";
import "../pages/styles/home.css";


const HomeCard = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/allpost", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        setData(result.posts);
      });
  }, []);

  return (
    <div className="Container">
      {data.map((item) => {
        //console.log(item.postedBy.name)
        return (
          <section style={{ width: "18rem" }}>
            <div className="HomeCard" key={item._id}>
              <h5>{item.postedBy.name}</h5>
              <img
                className="HomeCardImg"
                src={item.url}
              />
            </div>
            <div className="CommentSection">
              <p>{item.title}</p>
              <p>{item.body}</p>
              <span className="homeCardBar"></span>
              <input type="text" placeholder="your thoughts?" />
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default HomeCard;
