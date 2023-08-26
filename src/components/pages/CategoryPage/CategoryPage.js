
import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Container, Row, Col, } from 'react-bootstrap';
import dateToStr from '../../../utils/dateToStr';

const CategoryPage = () => {
  
  const { categoryId } = useParams();
   console.log("CategoryPage rendered");

  const postsInCategory = useSelector(state => state.posts.filter(
    post => post.categoryId === categoryId
  ));
  console.log("categoryName:", categoryId);

  return (
    <Container>
      <Row>
        <Col md={3}>
          <h2>Category: {categoryId}</h2>
        </Col>
        <Col md={9}>
          <Row>
            {postsInCategory.map(post => (
              <Col key={post.id} xs={12} sm={6}>
                <div className="post-card">
                  <h3>{post.title}</h3>
                  <p>
                    <strong>Author:</strong> {post.author}
                  </p>
                  <p>
                    <strong>Published: </strong> {dateToStr(post.publishedDate)}
                  </p>
                  <p>
                    <strong>Category: </strong> {post.categoryId}
                  </p>
                  <p>{post.shortDescription}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default CategoryPage;
