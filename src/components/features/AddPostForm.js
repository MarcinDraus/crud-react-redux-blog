
//import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addPost } from '../../Redux/postsRedux.js';
import PostForm from './PostForm';
//import dateToStr from '../../utils/dateToStr';

const AddPostForm = (props) => {


  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (post) => {
    dispatch(addPost(post)); 
    navigate('/');
  };

  return <PostForm post={props} action={handleSubmit}  actionText="Save post" />;
};

export default AddPostForm;
