import React, { Component } from "react";
import "./Homep.css";
import * as ReactBootstrap from "react-bootstrap";
import { Card, Table } from "react-bootstrap";
import {
  Row,
  Container,
  Col,
  Button,
  ButtonToolbar,
  InputGroup,
  FormControl
} from "react-bootstrap";
export default class Page5 extends Component {
  render() {
    return (
      <div>
        <Card className="bg-white text-dark">
          <Card.Img src="assets/KK01005A.jpg" alt="background image" />

          <Card.ImgOverlay />
        </Card>
      </div>
    );
  }
}
