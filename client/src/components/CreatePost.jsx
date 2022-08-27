import React from 'react'
import "./styles/createpost.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
} from "@fortawesome/free-solid-svg-icons";
const CreatePost = () => {
  return (
    <div className='PostCard'>
    <button className='createPostBtn'><input type="file" placeholder='file'/></button>
      <input type="text" placeholder='title' />
      <input type="text" placeholder='body' />
      
      <button className='createPostBtn'>Post</button>
    </div>
  )
}

export default CreatePost