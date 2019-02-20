import React, { Component } from "react";
import "./Homep.css";
import * as ReactBootstrap from "react-bootstrap";
import { Card, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Page2";
import "./Page3";
import "./Page4";
import "./Page5";
import "./Page6";
import "./Page7";
import {
  Nav,
  Item,
  Button,
  ButtonToolbar,
  InputGroup,
  FormControl
} from "react-bootstrap";
export default class Page1 extends Component {
  render() {
    return (
      <div>
        <Card className="bg-white text-dark">
          <Card.Img src="assets/KK01005A.jpg" alt="background image" />
          <Card.ImgOverlay>
            <Table>
              <thead>
                <tr>
                  <th colSpan={2}>
                    {/* <Card.Header> */}
                    <Button variant="primary">Music</Button>
                    {/* </Card.Header> */}
                  </th>
                  <th>
                    <Link to="/A">
                      <Button variant="primary">Menu</Button>
                    </Link>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td rowSpan={6}>what do you went to learn ?</td>
                  <td>
                    <Link to="/B">
                      <Button variant="primary" type="submit">
                        Letter writting
                      </Button>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Link to="C">
                      <Button variant="primary" type="submit">
                        number writting
                      </Button>
                    </Link>
                  </td>
                </tr>

                <tr>
                  <td>
                    <Link to="/D">
                      <Button variant="primary" type="submit">
                        Geez number writting
                      </Button>
                    </Link>
                  </td>
                </tr>

                <tr>
                  <td>
                    <Link to="E">
                      <Button variant="primary" href="/Page5" to="/Page5">
                        Abogiz reading
                      </Button>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Link to="F">
                      <Button variant="primary" href="/Page6" to="/Page6">
                        Letter game
                      </Button>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Link to="G">
                      <Button variant="primary" href="/Page7" to="/Page7">
                        Number game
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
