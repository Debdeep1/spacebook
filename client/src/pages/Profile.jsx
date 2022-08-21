import React from "react";
import NavbarCompo from "../components/NavbarComponent";
import "./styles/profile.css";

const Profile = () => {
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
          <h4>Doggo The Boy</h4>
          <div className="Info">
            <h6>10 posts</h6>
            <h6>10 followers</h6>
            <h6>following 10</h6>
          </div>
        </div>
      </div>
      <div className="ProGalleryContainer">
        <img className="galleryItem" src="https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg" />
        <img className="galleryItem" src="https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg" />
        <img className="galleryItem" src="https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg" />
        <img className="galleryItem" src="https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg" />
        <img className="galleryItem" src="https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg" />
        <img className="galleryItem" src="https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg" />
      </div>
    </>
  );
};

export default Profile;
