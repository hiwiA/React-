import React, { Component } from "react";
import "./Homep.css";
import { Link } from "react-router-dom";
import * as ReactBootstrap from "react-bootstrap";
import { Card, Table } from "react-bootstrap";

import Bounce from "react-reveal/Bounce";
import {
  Nav,
  Item,
  Button,
  ButtonToolbar,
  InputGroup,
  FormControl
} from "react-bootstrap";

export default class Homep extends Component {
  state = {
    LoggedIn: false
  };
  LoginHandel = () => {
    this.setState({ LoggedIn: true });
  };
  render() {
    return (
      <div>
        <Card className="bg-white text-dark">
          <Card.Img src="assets/KK01005A.jpg" alt="background image" />
          <Card.ImgOverlay>
            <Table>
              <thead>
                <tr>
                  <th colSpan={3}>
                    <Bounce right cascade>
                      <h1>Amharic Language Learning App</h1>
                    </Bounce>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <InputGroup.Prepend>
                      <InputGroup.Text id="basic-addon1">Name</InputGroup.Text>
                    </InputGroup.Prepend>
                  </td>
                  <td>
                    <FormControl
                      placeholder="Username"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    />
                  </td>
                  <td />
                </tr>
                <tr>
                  <td>
                    <InputGroup.Prepend>
                      <InputGroup.Text id="basic-addon1">Age</InputGroup.Text>
                    </InputGroup.Prepend>
                  </td>
                  <td>
                    <FormControl
                      placeholder="Age"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    />
                  </td>
                  <td>Reading and writting Teaching app</td>
                </tr>

                <tr>
                  <td>
                    <Link to="/A" onClick={this.LoginHandel.bind(this)}>
                      <Button variant="primary" type="submit">
                        Start
                      </Button>
                    </Link>
                  </td>
                </tr>

                <tr>
                  <td>
                    <Link to="H">
                      <Button variant="primary">
                        <b>+</b>
                      </Button>
                    </Link>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Card.ImgOverlay>
        </Card>
      </div>
    );
  }
}
