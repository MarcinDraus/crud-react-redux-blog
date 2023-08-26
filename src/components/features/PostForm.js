
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import dateToStr from '../../utils/dateToStr';
import { useForm } from "react-hook-form";
import initialState from '../../Redux/initialState';

const PostForm = ({ post, action, actionText, }) => {
 
  const {
    register,
    handleSubmit: validate,
    formState: { errors }
  } = useForm();

    
  const [publishedDate, setPublishedDate] = useState(new Date() || '');
  const [title, setTitle] = useState(post?.title || '');
  const[author, setAuthor]= useState(post?.author || '');
  const [shortDescription, setShortDescription] = useState(post?.shortDescription || '');
  const [content, setContent] = useState(post?.content || '');
  const [contentError, setContentError] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [dateError, setDateError] = useState(false);
  const [category, setCategory] = useState(post?.category || '');

  const handleSubmit = (e) => {
      setContentError(!content)
      setDateError(!publishedDate)
      if(content && publishedDate) {
          
    action({
      title: title,
      author: author, 
      shortDescription: shortDescription,
      categoryId: category,
      publishedDate: dateToStr(publishedDate),
      content: content,
      });
  }
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
        <Form.Control type="text" name="author" value={post.author} placeholder="Enter author"
                 {...register('author', {
                  required: 'Author is required',
                  minLength: {
                    value: 3,
                    message: 'Author must be at least 3 characters long',
                  },
                })}
        onChange={e=>setAuthor(e.target.value)} /> 
        {errors.author && (
          <small className="d-block form-text text-danger mt-2">
            {errors.author.message}
          </small>
        )}
      </Form.Group>
      <Form.Group className="mb-3">
          <Form.Label>Published</Form.Label>
               <DatePicker selected={publishedDate} onChange={(date) => setPublishedDate(date)} />
      </Form.Group>
      <Form.Group className="mb-3">
      <Form.Label>Category</Form.Label>
      <Form.Select	aria-label="Category"
				       {...register('categoryId', {
                    required: 'Category is required',
                  })}
                  onChange={e => setCategory(e.target.value)}
                  value={category} 
      				>
           <option value="" disabled>Select a category</option>
          {initialState.categories.map(category => (
            <option key={category.name} value={category.name}>
              {category.name}
            </option>
          ))}
         
        </Form.Select>
        {errors.category && (
          <small className="d-block form-text text-danger mt-2">
            {errors.category.message}
          </small>
        )}
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Short Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          name="shortDescription"
          value={shortDescription}
          {...register('shortDescription', {
            required: 'Title is required',
            minLength: {
              value: 10,
              message: 'shortDescription must be at least 20 characters long',
            },
          })}
          onChange={e=>setShortDescription(e.target.value)}
        />
         {errors.shortDescription && (
          <small className="d-block form-text text-danger mt-2">
            {errors.shortDescription.message}
          </small>
        )}
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Main Content</Form.Label>
        
        <ReactQuill theme="snow" value={content} onChange={value => setContent(value)} placeholder="Leave a comment here"  />
        {contentError && <small className="d-block form-text text-danger mt-2">Content can't be empty</small>}
       </Form.Group>
      <Button variant="primary" type="submit">
        {actionText}
      </Button>
    </Form>
  );
      };

export default PostForm;
