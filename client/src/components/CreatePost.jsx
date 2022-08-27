import React from 'react'
import "./styles/createpost.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import NavbarCompo from './NavbarComponent';
const CreatePost = () => {
  return (
    <>
    <NavbarCompo />
    <div className='PostCard'>
    <div><button className='createPostBtn'><input type="file" placeholder='file'/></button></div>
    <div><input className='postTitle' type="text" placeholder='title' /></div>
    <div><textarea className="postCaption" placeholder='body' /></div>
    <div><button className='createPostBtn'>Create Post</button></div>
    </div>
    </>
  )
}

export default CreatePost