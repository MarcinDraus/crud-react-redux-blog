
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import dateToStr from '../../utils/dateToStr';

const PostForm = ({ post, action, actionText }) => {
  const [formData, setFormData] = useState({
    title: post?.title || '',
    author: post?.author || '',
    publishedDate: post?.publishedDate || '', 
    publishedDateS: post?.publishedDateS || '',
    shortDescription: post?.shortDescription || '',
    content: post?.content || '',
  });
  const [publishedDateS, setPublishedDateS] = useState(post?.publishedDateS || '');

  const [publishedDate, setPublishedDate] = useState(new Date() || '');

   const handleSubmit = (e) => {
    e.preventDefault();
    action({ ...formData, publishedDateS: publishedDateS, publishedDate: dateToStr(publishedDate) });
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

        <DatePicker selected={publishedDate}  onChange={(date)=> setPublishedDate(date)} />
        
      <Form.Control
          type="text"
          name="publishedDateS"
          value={publishedDateS}
          onChange={(e) => setPublishedDateS(e.target.value)}
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
