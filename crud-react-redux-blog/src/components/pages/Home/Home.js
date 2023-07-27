
import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Row, Col } from 'react-bootstrap';
import AllPosts from '../../features/AllPosts.js';

const Home = () => {
  return (
    <Container>
      <Row className="mb-4">
        <Col xs={6}>
          <h2>All posts</h2>
        </Col>
        <Col xs={6} className="text-end">
          <Link to="/post/add">
            <Button variant="outline-primary">Add post</Button>
          </Link>
        </Col>
      </Row>
      <hr />
      <AllPosts />
    </Container>
  );
};

export default Home;
