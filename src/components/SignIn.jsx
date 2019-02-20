import React, { Component } from "react";
import "./Homep.css";
import * as ReactBootstrap from "react-bootstrap";
import { Card, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Page1";
import {
  Nav,
  Item,
  Button,
  ButtonToolbar,
  InputGroup,
  FormControl
} from "react-bootstrap";
export default class SignIn extends Component {
  render() {
    return (
      <div>
        <Card className="bg-white text-dark">
          <Card.Img src="assets/KK01005A.jpg" alt="background image" />
          <Card.ImgOverlay>
            <Table>
              <thead>
                <tr>
                  <th />
                  <th />
                  <th colSpan={5}>User Name List</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan={5}>
                    <Button variant="primary" type="submit">
                      Musci
                    </Button>
                  </td>
                  <td />
                  <td>
                    <Link to="/A">
                      <Button variant="primary" type="submit">
                        Menu
                      </Button>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td />
                  <td>UserName</td>
                  <td />
                  <td>
                    <input placeholder="name" />
                  </td>
                </tr>

                <tr>
                  <td />
                  <td rowSpan={4} colSpan={4}>
                    <Button variant="primary" type="submit" />
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
