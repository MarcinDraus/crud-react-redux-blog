

import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const Post = () => {
  const { id } = useParams();
  const post = useSelector((state) => state.posts.find((p) => p.id === id));

  if (!post) {
    return <div>Post not found.</div>;
  }

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.publishedDate}</p>
      <p>{post.content}</p>
    </div>
  );
};

export default Post;

