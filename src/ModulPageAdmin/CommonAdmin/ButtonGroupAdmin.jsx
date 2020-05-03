import React, { Component } from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from 'react-bootstrap/Button';
import "./ButtonGroupAdmin.css";

export class ButtonGroupAdmin extends Component {
  render() {
    return (
      <ButtonGroup vertical>
        <Button className="btn-admin" href="/textAdmin">Text</Button>
        <Button className="btn-admin" href="/videoAdmin">Video</Button>
        <Button className="btn-admin" href="/quizAdmin">Quiz</Button>
      </ButtonGroup>
    );
  }
}
