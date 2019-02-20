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
export default class Page67 extends Component {
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
                  <th colSpan={5}>Number writing Game</th>
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
                  <td colSpan={5}>
                    <Button variant="primary" type="submit">
                      Sound
                    </Button>
                  </td>
                  <td />
                  <td>
                    <Button variant="primary" type="submit">
                      User
                    </Button>
                  </td>
                </tr>

                <tr>
                  <td />
                  <td rowSpan={4} colSpan={4}>
                    <Button variant="primary" type="submit">
                      <input placeholder="writing place" />
                    </Button>
                  </td>
                  <td>
                    <Button variant="primary">Color</Button>
                  </td>
                  <td />
                </tr>

                <tr>
                  <td />
                  <td>
                    <Button variant="primary">Eraser</Button>
                  </td>
                </tr>
                <tr>
                  <td />
                  <td>
                    <Button variant="primary">Pencile</Button>
                  </td>
                </tr>
                <tr>
                  <td />
                  <td>
                    <Button variant="primary">Brush</Button>
                  </td>
                </tr>
                <tr>
                  <td />
                  <td>text placeholder</td>
                  <td />

                  <td>
                    <Button variant="primary">check</Button>
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
