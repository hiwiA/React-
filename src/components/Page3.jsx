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
export default class Page3 extends Component {
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
                  <th colSpan={5}>Number writing</th>
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
                    <Link to="A">
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
                  <td rowSpan={5}>
                    <Button variant="primary" type="submit">
                      0
                    </Button>
                  </td>
                  <td rowSpan={4} colSpan={2}>
                    <input placeholder="writing place" />
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
                </tr>
                <tr>
                  <td />
                  <td />
                  <td />
                  <td>
                    <Button variant="primary">check</Button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Button variant="primary">0</Button>
                  </td>

                  <td>
                    <Button variant="primary">1</Button>
                  </td>
                  <td>
                    <Button variant="primary">2</Button>
                  </td>
                  <td>
                    <Button variant="primary">3</Button>
                  </td>
                  <td>
                    <Button variant="primary">4</Button>
                  </td>
                  <td>
                    <Button variant="primary">5</Button>
                  </td>
                  <td>
                    <Button variant="primary">6</Button>
                  </td>
                  <td>
                    <Button variant="primary">7</Button>
                  </td>
                  <td>
                    <Button variant="primary">8</Button>
                  </td>
                  <td>
                    <Button variant="primary">9</Button>
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
