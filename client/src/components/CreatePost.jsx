import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
} from "@fortawesome/free-solid-svg-icons";
const CreatePost = () => {
  return (
    <div className='PostCard'>
      <input type="text" placeholder='title' />
      <input type="text" placeholder='body' />
      <input type="file" placeholder='file'/>
      <button>Post</button>
    </div>
  )
}

export default CreatePost