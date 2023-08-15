
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const PostForm = ({ post, action, actionText }) => {
  const [formData, setFormData] = useState({
    title: post?.title || '',
    author: post?.author || '',
    publishedDate: post?.publishedDate || '',
    shortDescription: post?.shortDescription || '',
    content: post?.content || '',
  });
  
   const handleSubmit = (e) => {
    e.preventDefault();
    action(formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  
  const handleContentChange = (value) => {
    setFormData((prevData) => ({ ...prevData, content: value }));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" name="title" value={formData.title} onChange={handleChange} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Author</Form.Label>
        <Form.Control type="text" name="author" value={formData.author} onChange={handleChange} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Published</Form.Label>
        <Form.Control
          type="text"
          name="publishedDate"
          value={formData.publishedDate}
          onChange={handleChange}
          placeholder="YYYY-MM-DD"
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Short Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          name="shortDescription"
          value={formData.shortDescription}
          onChange={handleChange}
        />
        
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Main Content</Form.Label>
        
        {/* <Form.Control
          as="textarea"
          rows={5}
          name="content"
          value={formData.content}
          onChange={handleChange}
        /> */}
         <ReactQuill theme="snow" value={formData.content} onChange={handleContentChange}  />

       </Form.Group>
      <Button variant="primary" type="submit">
        {actionText}
      </Button>
    </Form>
  );
};

export default PostForm;
