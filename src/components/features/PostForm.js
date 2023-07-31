// import React, { useState } from 'react';

// const PostForm = ({ action, actionText }) => {
//   const [title, setTitle] = useState('');
//   const [content, setContent] = useState('');

//   const handleTitleChange = e => {
//     setTitle(e.target.value);
//   };

//   const handleContentChange = e => {
//     setContent(e.target.value);
//   };

//   const handleSubmit = e => {
//     e.preventDefault();
//     const post = { title, content };
//     action(post);
//     setTitle('');
//     setContent('');
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="title">Title:</label>
//         <input
//           type="text"
//           id="title"
//           value={title}
//           onChange={handleTitleChange}
//           required
//         />
//       </div>
//       <div>
//         <label htmlFor="content">Content:</label>
//         <textarea
//           id="content"
//           value={content}
//           onChange={handleContentChange}
//           required
//         />
//       </div>
//       <div>
//         <button type="submit">{actionText}</button>
//       </div>
//     </form>
//   );
// };

// export default PostForm;


import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { addPost } from '../../Redux/postsRedux.js';

const PostForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [post, setPost] = useState({
    title: '',
    author: '',
    published: '',
    shortDescription: '',
    content: '',
  });
//   const [title, setTitle] = useState('');
//   const [author, setAuthor] = useState('');
//   const [published, setPublished] = useState('');
//   const [shortDescription, setShortDescription] = useState('');
//   const [content, setcontent] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost((prevPost) => ({ ...prevPost, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addPost(post));
    //dispatch({ type: 'ADD_POST', payload: { ...post, id: shortid() } });
    // Przekierowanie użytkownika na stronę główną po dodaniu posta
    navigate('/');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" name="title" value={post.title} onChange={handleChange} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Author</Form.Label>
        <Form.Control type="text" name="author" value={post.author} onChange={handleChange} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Published</Form.Label>
        <Form.Control type="text" name="published" value={post.published} onChange={handleChange} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Short Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          name="shortDescription"
          value={post.shortDescription}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Main Content</Form.Label>
        <Form.Control
          as="textarea"
          rows={5}
          name="content"
          value={post.content}
          onChange={handleChange}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Add post
      </Button>
    </Form>
  );
};

export default PostForm;