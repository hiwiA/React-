import React, { Component } from "react";
import * as ReactBootstrap from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Nav, Item } from "react-bootstrap";
export default class Hiwot extends Component {
  render() {
    return (
      <div>
        <Card className="bg-white text-dark">
          <Card.Img src="assets/KK01005A.jpg" alt="background image" />
          <Card.ImgOverlay>
            <Card.Title>Amharic Language Learning App</Card.Title>
            <Card.Header>
              <Nav variant="pills" defaultActiveKey="#first">
                <Nav.Item>
                  <Nav.Link href="#first">Active</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#link">Link</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#disabled" disabled>
                    Disabled
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Card.Header>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
            <Card.Text>Last updated 3 mins ago</Card.Text>
          </Card.ImgOverlay>
        </Card>
        ;
      </div>
    );
  }
}
