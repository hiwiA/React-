import React, { Component } from "react";
import "./Homep.css";
import * as ReactBootstrap from "react-bootstrap";
import { Card, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Page1";
import Immutable from "immutable";
import {
  Nav,
  Item,
  Button,
  ButtonToolbar,
  InputGroup,
  FormControl
} from "react-bootstrap";
export default class Page2 extends Component {
  constructor() {
    super();

    this.state = {
      lines: new Immutable.List(),
      isDrawing: false
    };

    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);
  }

  componentDidMount() {
    document.addEventListener("mouseup", this.handleMouseUp);
  }

  componentWillUnmount() {
    document.removeEventListener("mouseup", this.handleMouseUp);
  }

  handleMouseDown(mouseEvent) {
    if (mouseEvent.button != 0) {
      return;
    }

    const point = this.relativeCoordinatesForEvent(mouseEvent);

    this.setState(prevState => ({
      lines: prevState.lines.push(new Immutable.List([point])),
      isDrawing: true
    }));
  }

  handleMouseMove(mouseEvent) {
    if (!this.state.isDrawing) {
      return;
    }

    const point = this.relativeCoordinatesForEvent(mouseEvent);

    this.setState(prevState => ({
      lines: prevState.lines.updateIn([prevState.lines.size - 1], line =>
        line.push(point)
      )
    }));
  }

  handleMouseUp() {
    this.setState({ isDrawing: false });
  }

  relativeCoordinatesForEvent(mouseEvent) {
    const boundingRect = this.refs.drawArea.getBoundingClientRect();
    return new Immutable.Map({
      x: mouseEvent.clientX - boundingRect.left,
      y: mouseEvent.clientY - boundingRect.top
    });
  }
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
                  <th colSpan={5}>Letter writing</th>
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
                      U
                    </Button>
                  </td>
                  <td rowSpan={4} colSpan={2}>
                    <div
                      className="drawArea"
                      ref="drawArea"
                      onMouseDown={this.handleMouseDown}
                      onMouseMove={this.handleMouseMove}
                    >
                      <Drawing lines={this.state.lines} />
                    </div>
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
                    <Button variant="primary">A</Button>
                  </td>

                  <td>
                    <Button variant="primary">B</Button>
                  </td>
                  <td>
                    <Button variant="primary">C</Button>
                  </td>
                  <td>
                    <Button variant="primary">D</Button>
                  </td>
                  <td>
                    <Button variant="primary">E</Button>
                  </td>
                  <td>
                    <Button variant="primary">F</Button>
                  </td>
                  <td>
                    <Button variant="primary">G</Button>
                  </td>
                  <td>
                    <Button variant="primary">H</Button>
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
function Drawing({ lines }) {
  return (
    <svg className="drawing">
      {lines.map((line, index) => (
        <DrawingLine key={index} line={line} />
      ))}
    </svg>
  );
}

function DrawingLine({ line }) {
  const pathData =
    "M " +
    line
      .map(p => {
        return `${p.get("x")} ${p.get("y")}`;
      })
      .join(" L ");

  return <path className="path" d={pathData} />;
}
