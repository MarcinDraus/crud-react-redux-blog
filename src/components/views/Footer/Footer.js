
import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-light text-center py-3 mt-4">
      <Container>
        <p className="text-muted">copyright
          &copy; <span className="text-primary"></span> BlogApp 2023
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
