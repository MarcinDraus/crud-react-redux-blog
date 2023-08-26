
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Row, Col,  } from 'react-bootstrap';
import { getAllPosts } from '../../Redux/postsRedux.js';
import dateToStr from '../../utils/dateToStr';

const AllPosts = () => {
  const posts = useSelector(getAllPosts);

  return (
    <Row className="justify-content-between">
      {posts.map((post) => (
        <Col key={post.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
          <div>
            <h3>{post.title}</h3>
            <p><strong>Author:</strong> {post.author}</p>
            <p><strong>Published: </strong> {dateToStr(post.publishedDate)} </p>
            <p><strong>Category: </strong> {post.categoryId}</p>        
            <p>{post.shortDescription}</p>
            <Link to={`/post/${post.id}`}>
              <Button variant="primary">Read more</Button>
            </Link>
          </div>
        </Col>
      ))}
    </Row>
  );
};

export default AllPosts;

