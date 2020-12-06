import React, { Component, useEffect, useState } from "react";
import { Navbar, Nav, Button, Modal, Form, FormControl ,Container,Row} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

type Props = any;

const HowToUse: React.FC<Props> = (props) => {
  return (
    <Container>
      <Row><h2>HowToUse</h2></Row>
      <Row className="mt-2"><h4>GoogleDriveでの準備</h4></Row>
      <Row className="mt-1">
      <ol>
        <li>
          GoogleDriveに画像をアップロードするためのフォルダを用意します<br/>

        </li>
        <li>
          共有権限を変更します
          <ol>
            <li>
              対象のフォルダを右クリック、「共有」をクリックします。<br/>
              <img height={200} src='http://drive.google.com/uc?export=view&id=1_6zb0NE1gT1dmqEl6q4EY7RGobz5GYbW#image.png' alt=""/>
            </li>
            <li>
              「○○へのリンク権限を変更」をクリックします。<br/>
              <img  height={300} src='http://drive.google.com/uc?export=view&id=1KpH4aX4NL4YTS8gakPCp4wtXW_mrC9NB#image.png' alt=""/>
            </li>
            <li>
              赤線部分をクリックして「リンクを知っている全員」に変更します。<br/>
              <img height={300}  src='http://drive.google.com/uc?export=view&id=1QCrLsG53DG5q2TF_HFkCHxMmGZ10JSZn#image.png' alt=""/>
            </li>
            <li>
              「完了」を押します。
            </li>
          </ol>
        </li>
        <li>
          対象フォルダ内に画像をアップロードします。
        </li>
        <li>
          アップロードした画像を右クリックして「リンクを取得」をクリックします。
        </li>
        <li>
          「リンクをコピー」を押して共有URLを取得します。
        </li>
        <li>
          取得した共有URLと本アプリを使用することでMarkdown埋め込みやimgタグが生成できます。
        </li>
      </ol>
      </Row>
    </Container>
  );
};

export default HowToUse;