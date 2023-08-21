
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Navigate } from 'react-router-dom';
import { getPostById, deletePost } from '../../../Redux/postsRedux.js';
import { Button, Col, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import dateToStr from '../../../utils/dateToStr.js';

const Post = () => {
  const { id } = useParams();
  const post = useSelector((state) => getPostById(state, id));
  console.log("post.publishedDate:", post.publishedDate, "S",  post.bublishedDateS);
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleHideModal = () => {
    setShowModal(false);
  };

  const handleDeletePost = () => {
        dispatch(deletePost(id));

    // Ukrycie modala po usunięciu postu
    handleHideModal();
  };

  if (!post) {
    return <Navigate to="/" />;
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
            <Button variant="outline-danger" onClick={handleShowModal}>
              Delete
            </Button>{' '}
          </div>
        </div>
        <p>{post.publishedDateS}</p>
        <p>{dateToStr(post.publishedDate)}</p>
        {/* <p dangerouslySetInnerHTML={{ __html: post.content }}></p> */}
        </Col>

      {/* Modal do usunięcia postu */}
      <Modal show={showModal} onHide={handleHideModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete this post?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleHideModal}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDeletePost}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Post;
