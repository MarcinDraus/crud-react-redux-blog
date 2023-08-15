
//import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { getPostById, editPost } from '../../Redux/postsRedux.js';
import PostForm from './PostForm';

const EditPostForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const post = useSelector((state) => getPostById(state, id));

  const handleSubmit = (editedPost) => {
    dispatch(editPost({ ...post, ...editedPost, id }));
    navigate('/');
  };

  return <PostForm post={post} action={handleSubmit} actionText="Save post" />;
};

export default EditPostForm;


  