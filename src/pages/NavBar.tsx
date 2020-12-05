import React, { Component, useEffect, useState } from "react";
import { Navbar, Nav, Button, Modal, Form, FormControl } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

type Props = any;

const NavBar: React.FC<Props> = (props) => {
  return (
    <Navbar variant="dark" className="commet-color">
      <LinkContainer to="/">
        <Navbar.Brand>g-drive-image-tag-tool</Navbar.Brand>
      </LinkContainer>
      <Nav className="mr-auto">
        <LinkContainer to="/">
          <Nav.Link>アプリ</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/howtouse">
          <Nav.Link>HowToUse</Nav.Link>
        </LinkContainer>
      </Nav>
      <Nav>
        <div>
          
        </div>
      </Nav>
    </Navbar>
  );
};

export default NavBar;