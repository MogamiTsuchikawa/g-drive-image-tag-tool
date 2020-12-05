import React, { Component, useEffect, useState } from "react";
import { Navbar, Nav, Button, Modal, Form, FormControl } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

type Props = any;

const ImageTool: React.FC<Props> = (props) => {
  const [shareURL,setShareURL] = useState("");
  const handleOnChangeShareURL = (e: React.ChangeEvent<HTMLInputElement>) =>{
    setShareURL(e.target.value);
  }
  const handleOnClickedGenerateBtn = () =>{

  }
  return (
    <div>
      <h3>imgタグ変換ツール</h3>
      <Form>
        <FormControl
        type="text"
        placeholder="ミーティング名"
        onChange={handleOnChangeShareURL} />
        <Button onClick={handleOnClickedGenerateBtn}>生成</Button>
      </Form>
      
    </div>
  );
};

export default ImageTool;