import React, { useState } from "react";
import "./styles/createpost.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import NavbarCompo from "./NavbarComponent";
const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [image, setImage] = useState("");

  const postDetails =()=>{
    const data = new FormData()
    data.append("file",image)
    data.append("upload_preset","space123")
    data.append("cloud_name","spacebook9")
    fetch("https://api.cloudinary.com/v1_1/spacebook9/image/upload",{
      method:"post",
      body:data,
    }).then(res=>res.json()).then(data=>{
      console.log(data)
    }).catch(err=>{
      console.log(err)
    })
  }

  return (
    <>
      <NavbarCompo />
      <div className="PostCard">
        <div>
            <input className="createPostBtn" type="text" placeholder="Image Link" value={image} onChange={(e)=>setImage(e.target.files)} />
        </div>
        <div>
          <input
            className="postTitle"
            type="text"
            placeholder="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <textarea
            className="postCaption"
            placeholder="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </div>
        <div>
          <button onClick={()=>postDetails()} className="createPostBtn">Create Post</button>
        </div>
      </div>
    </>
  );
};

export default CreatePost;
