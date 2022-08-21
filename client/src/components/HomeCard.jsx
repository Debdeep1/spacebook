import React from "react";
import "../pages/styles/home.css";
import { useSpring, animated } from 'react-spring'

const HomeCard = () => {
  return (
    <div className="Container">
      <section style={{ width: "18rem" }}>
        <div className="HomeCard">
          <h5>Card Title</h5>
          <img
            className="HomeCardImg"
            src="https://images8.alphacoders.com/380/thumb-1920-380977.jpg"
          />
        </div>
        <div className="CommentSection">
          <p>this is post.</p>
          <span className="homeCardBar"></span>
          <input type="text" placeholder="your thoughts?" />
        </div>
      </section>
    </div>
  );
};

export default HomeCard;
