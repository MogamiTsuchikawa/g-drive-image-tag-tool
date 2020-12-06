import React, { Component, useEffect, useState } from "react";
import { Navbar, Nav, Button, Modal, Form, FormControl } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
const rootURL = "/g-drive-image-tag-tool";
type Props = any;

const NavBar: React.FC<Props> = (props) => {
  const linkStyle = {
    color: "white",
  }
  return (
    <Navbar bg="primary" variant="dark">
      <LinkContainer to={rootURL+"/"}>
        <div>
        <img
        alt=""
        src="./mogami.png"
        width="30"
        height="30"
        className="d-inline-block align-top"
      />{' '}
        <Navbar.Brand>g-drive-image-tag-tool</Navbar.Brand>
        </div>
      
      </LinkContainer>
      <Nav className="mr-auto">
        <LinkContainer to={rootURL+"/"}>
          <Nav.Link>アプリ</Nav.Link>
        </LinkContainer>
        <LinkContainer to={rootURL+"/howtouse"}>
          <Nav.Link>HowToUse</Nav.Link>
        </LinkContainer>
      </Nav>
      <Nav>
        <div>
          <a href="https://mogamitsuchikawa.net" style={linkStyle}>製作者サイトへ</a>
        </div>
      </Nav>
    </Navbar>
  );
};

export default NavBar;