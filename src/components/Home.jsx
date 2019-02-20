import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as ReactBootstrap from "react-bootstrap";
import { Jumbotron, Container, Row, Col, Image, Button } from "react-bootstrap";
import "./Home.css";
export default class Home extends Component {
  render() {
    return (
      <Container>
        <Jumbotron>
          <h2> Welcome to my home page</h2>
          <p> this is how you build a website</p>
        </Jumbotron>
        <Link to="/News">
          <Button bsStyle="primary"> News</Button>
        </Link>
      </Container>
    );
  }
}
