import React from 'react';
import {  Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './Header.css'

const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <div className='d-flex justify-content-start'>
                <Navbar.Brand href="#home">

                <img
                  src="https://i.ibb.co/jws8b4y/house-1.png"
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                  alt="Bear house"
                />
                <h4>BEAR GAME</h4>
                </Navbar.Brand>
                </div>
                <div>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    <Nav.Link className=' header-text' href="storyline">Story Line</Nav.Link>
                    <Nav.Link className=' header-text' href="whitepaper">Whitepaper</Nav.Link>
                    <button className='header-button'>0 mah</button>
                    <button className='header-button'>connect Walet</button>
                  </Nav>
                </Navbar.Collapse>
                </div>
              </Container>
        </Navbar>
    );
};

export default Header;