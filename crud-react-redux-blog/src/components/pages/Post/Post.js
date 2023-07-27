
// components/pages/Post.js
import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getPostById } from '../../../Redux/postsRedux';
import { Button, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Post = () => {
  const { id } = useParams();
  const post = useSelector((state) => getPostById(state, id));

  if (!post) {
    return <div>Post not found.</div>;
  }

  return (
    <div>
      <Col xs={12} md={8} className="mx-auto">
        <div className="d-flex justify-content-between">
          <h2>{post.title}</h2>
          <div>
            <Link to={`/post/edit/${id}`}>
              <Button variant="outline-info">Edit</Button>
            </Link>{' '}
            <Button variant="outline-danger" >
              Delete
            </Button>{' '}
          </div>
        </div>
        <p>{post.publishedDate}</p>
        <p>{post.content}</p>
      </Col>
    </div>
  );
};

export default Post;

// import React from 'react';
// import { useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom';
// import { getPostById } from '../../Redux/postsRedux';

// const Post = () => {
//   const { id } = useParams();
//   const post = useSelector((state) => getPostById(state, id));

//   if (!post) {
//     return <div>Post not found.</div>;
//   }

//   return (
//     <div>
//       <h2>{post.title}</h2>
//       <p>{post.publishedDate}</p>
//       <p>{post.content}</p>
//     </div>
//   );
// };

// export default Post;

