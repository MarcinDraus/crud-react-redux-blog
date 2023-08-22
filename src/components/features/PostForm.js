/* eslint-disable no-unused-vars */

import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import dateToStr from '../../utils/dateToStr';
import { useForm } from "react-hook-form";


const PostForm = ({ post, action, actionText }) => {
  
  const {
    register,
    handleSubmit: validate,
    formState: { errors }
  } = useForm();
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
  const [title, setTitle] = useState(post?.title || '');
  const[author, setAuthor]= useState(post?.author || '');
  const [shortDescription, setShortDescription] = useState(post?.shortDescription || '');
  const [content, setContent] = useState(post?.content || '');

  const handleSubmit = (e) => {
    action({
    
      title: title,
      author: author, 
      shortDescription: shortDescription,
      publishedDateS: publishedDateS, 
      publishedDate: dateToStr(publishedDate),
      content: content,
      });
  };

  return (
    <Form onSubmit={validate(handleSubmit)}>
      <Form.Group className="mb-3">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          name="title"
          placeholder="Enter title"
          defaultValue={post?.title || ''}
          {...register('title', {
            required: 'Title is required',
            minLength: {
              value: 3,
              message: 'Title must be at least 3 characters long',
            },
          })}
          onChange={e=>setTitle(e.target.value)}
        />
        {errors.title && (
          <small className="d-block form-text text-danger mt-2">
            {errors.title.message}
          </small>
        )}
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Author</Form.Label>
        <Form.Control type="text" name="author" value={post.author} placeholder="Enter author" onChange={e=>setAuthor(e.target.value)} />
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
          value={shortDescription}
          onChange={e=>setShortDescription(e.target.value)}
        />
        
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Main Content</Form.Label>
        
        <ReactQuill theme="snow" value={content} onChange={value => setContent(value)} placeholder="Leave a comment here"  />

       </Form.Group>
      <Button variant="primary" type="submit">
        {actionText}
      </Button>
    </Form>
  );
      };

export default PostForm;
