import React, { Component, useEffect, useState } from "react";
import { Navbar, Nav, Button, Modal, Form, FormControl, Container, Row, InputGroup } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

type Props = any;

const ImageTool: React.FC<Props> = (props) => {
  const [shareURL, setShareURL] = useState("");
  const [generated, setGenerated] = useState(false);
  const [rawURL, setRawURL] = useState("");
  const [mdTag, setMdTag] = useState("");
  const [imgTag, setImgTag] = useState("");
  const handleOnChangeShareURL = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShareURL(e.target.value);
  }
  const handleOnClickedGenerateBtn = () => {
    let tmp = shareURL;
    tmp = tmp.replace("https://drive.google.com/file/d/", "");
    tmp = tmp.replace("/view?usp=sharing", "");
    tmp = "http://drive.google.com/uc?export=view&id=" + tmp;
    setMdTag("![テキスト](" + tmp + ")");
    setImgTag("<img src=\"" + tmp + "\" />");
    setRawURL(tmp);
    setGenerated(true);
  }
  function execCopy(string: string) {
    var temp = document.createElement('textarea');

    temp.value = string;
    temp.selectionStart = 0;
    temp.selectionEnd = temp.value.length;

    var s = temp.style;
    s.position = 'fixed';
    s.left = '-100%';

    document.body.appendChild(temp);
    temp.focus();
    var result = document.execCommand('copy');
    temp.blur();
    document.body.removeChild(temp);
    // true なら実行できている falseなら失敗か対応していないか
    return result;
  }

  const handleOnClickCopyRawURL = () => {
    execCopy(rawURL);
  }
  const handleOnClickCopyMdTag = () => {
    execCopy(mdTag);
  }
  const handleOnClickCopyImgTag = () => {
    execCopy(imgTag);
  }
  return (
    <div>
      <Container>
        <Row className="text-center">
          <h3 className="text-center">imgタグ変換ツール</h3>
        </Row>
        <Row>
          
            <Form.Control type="text" placeholder="共有URL" onChange={handleOnChangeShareURL} />
        </Row>
        <Row><Button onClick={handleOnClickedGenerateBtn} className="text-center mt-1">生成</Button></Row>
        {generated ?
          <div className="mt-3">
            <Row>
              画像への直接リンク<br />
              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <Button variant="outline-secondary" onClick={handleOnClickCopyRawURL}>Copy</Button>
                </InputGroup.Prepend>
                <Form.Control type="text" placeholder="Normal text" value={rawURL} readOnly />
              </InputGroup>
            </Row>
            <Row>
              MarkDownタグ<br />
              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <Button variant="outline-secondary" onClick={handleOnClickCopyMdTag}>Copy</Button>
                </InputGroup.Prepend>
                <Form.Control type="text" placeholder="Normal text" value={mdTag} readOnly />
              </InputGroup>
            </Row>
            <Row>
              HTML imgタグ<br />
              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <Button variant="outline-secondary" onClick={handleOnClickCopyImgTag}>Copy</Button>
                </InputGroup.Prepend>
                <Form.Control type="text" placeholder="Normal text" value={imgTag} readOnly />
              </InputGroup>
            </Row>
            <Row>
              画像プレビュー（生成が正しく行われていると下に画像が表示されます）
          <img src={rawURL} />
            </Row>
            <br />
            <br />

          </div>
          :
          <div className="mt-3">
            GoogleDriveで作った画像の共有URLを<br />貼って生成ボタンを押してください。
        </div>
        }
      </Container>


    </div>
  );
};

export default ImageTool;