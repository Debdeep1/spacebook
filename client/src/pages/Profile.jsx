import React, { useEffect, useState } from "react";
import NavbarCompo from "../components/NavbarComponent";
import "./styles/profile.css";

const Profile = () => {

  const [data, setData] = useState([]);
  const [name, setName] = useState([]);
  useEffect(() => {
    fetch("/allpost", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        setData(result.posts);
        //setName(result.posts[0].postedBy.name)
      });
  }, []);

  return (
    <>
      <NavbarCompo />
      <div className="ProfileContainer">
        <div className="ProImgContainer">
          <img 
            src="https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg"
            className="ProImg"
          />
        </div>
        <div className="ProInfoContainer">
          <h4>{name}</h4>
          <div className="Info">
            <h6>10 posts</h6>
            <h6>10 followers</h6>
            <h6>following 10</h6>
          </div>
        </div>
      </div>
      <div className="ProGalleryContainer">
      {data.map((item)=>{
        return (
          <img className="galleryItem" src={item.url} />
        )
      })}
      </div>
    </>
  );
};

export default Profile;
