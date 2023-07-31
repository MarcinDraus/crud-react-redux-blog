
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addPost } from '../../Redux/postsRedux.js';
import PostForm from './PostForm';

const AddPostForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const handleSubmit = post => {
    dispatch(addPost(post));
    navigate('/');
  };

  return <PostForm action={handleSubmit} actionText="Add post" />;
};

export default AddPostForm;


// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { Form, Button } from 'react-bootstrap';

// import { addPost } from '../../Redux/postsRedux.js';

// const AddPostForm = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const [post, setPost] = useState({
//     title: '',
//     author: '',
//     published: '',
//     shortDescription: '',
//     content: '',
//   });
// //   const [title, setTitle] = useState('');
// //   const [author, setAuthor] = useState('');
// //   const [published, setPublished] = useState('');
// //   const [shortDescription, setShortDescription] = useState('');
// //   const [content, setcontent] = useState('');

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setPost((prevPost) => ({ ...prevPost, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(addPost(post));
//     //dispatch({ type: 'ADD_POST', payload: { ...post, id: shortid() } });
//     // Przekierowanie użytkownika na stronę główną po dodaniu posta
//     navigate('/');
//   };

//   return (
//     <Form onSubmit={handleSubmit}>
//       <Form.Group className="mb-3">
//         <Form.Label>Title</Form.Label>
//         <Form.Control type="text" name="title" value={post.title} onChange={handleChange} />
//       </Form.Group>
//       <Form.Group className="mb-3">
//         <Form.Label>Author</Form.Label>
//         <Form.Control type="text" name="author" value={post.author} onChange={handleChange} />
//       </Form.Group>
//       <Form.Group className="mb-3">
//         <Form.Label>Published</Form.Label>
//         <Form.Control type="text" name="published" value={post.published} onChange={handleChange} />
//       </Form.Group>
//       <Form.Group className="mb-3">
//         <Form.Label>Short Description</Form.Label>
//         <Form.Control
//           as="textarea"
//           rows={3}
//           name="shortDescription"
//           value={post.shortDescription}
//           onChange={handleChange}
//         />
//       </Form.Group>
//       <Form.Group className="mb-3">
//         <Form.Label>Main Content</Form.Label>
//         <Form.Control
//           as="textarea"
//           rows={5}
//           name="content"
//           value={post.content}
//           onChange={handleChange}
//         />
//       </Form.Group>
//       <Button variant="primary" type="submit">
//         Add post
//       </Button>
//     </Form>
//   );
// };

// export default AddPostForm;


