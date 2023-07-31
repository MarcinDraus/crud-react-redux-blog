
import React from 'react';
import { Container } from 'react-bootstrap';
import EditPostForm from '../../features/EditPostForm.js';

const EditPost = () => {
  return (
    <Container>
      <h1>Edit Post</h1>
      <EditPostForm />
    </Container>
  );
};
  
export default EditPost;
