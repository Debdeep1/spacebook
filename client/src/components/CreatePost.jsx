import React, { useState, useEffect } from "react";
import "./styles/createpost.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import NavbarCompo from "./NavbarComponent";
import { useNavigate } from "react-router-dom";
const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [url,setUrl] = useState("")
  
  const navigate = useNavigate()

  const postDetails =()=>{
    fetch("/createpost",{
      method:"post",
      headers:{"Content-Type":"application/json", "Authorization":"Bearer "+localStorage.getItem("jwt")},
      body:JSON.stringify({
        title,
        body,
        url,
      })
    }).then(res=>res.json()).then(data=>{console.log(data); if(data.error){
      alert(data.error);
    } else{
      navigate(`/`)
      alert("Post Created!")
    }}).catch(err=>{
      console.log(err)
    })
  }


  return (
    <>
      <NavbarCompo />
      <div className="PostCard">
        <div>
        <input className="createPostBtn" value={url} type="text" placeholder="Image link" onChange={(e)=>setUrl(e.target.value)} />
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
