import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom';
import MovieDetails from './MovieDetails';

const Preview = () => {

  const { state } = useLocation();
  const movie = state?.movie;

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/"><b>Back to Home</b></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <MovieDetails movie={movie}></MovieDetails>
    </>
  );
}

export default Preview;