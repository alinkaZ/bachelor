import React, { Component } from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import "./ButtonGroupAdmin.css";

export class ButtonGroupAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onLessonTypeChange: this.props.onLessonTypeChange,
    };
  }
  onButtonClick(event, type) {
    console.log(event, type);
    if (this.props.onLessonTypeChange) {
      this.props.onLessonTypeChange("quiz");
    }
    /*this.state.onLessonTypeChange()*/
  };

  render() {
    return (
      <ButtonGroup vertical>
        <Button className="btn-admin" onClick={this.onButtonClick.bind(this, "text")}>
          Text
        </Button>
        <Button className="btn-admin" onClick={this.onButtonClick.bind(this,"video")}>
          Video
        </Button>
        <Button className="btn-admin" onClick={this.onButtonClick.bind(this,"quiz")}>
          Quiz
        </Button>
      </ButtonGroup>
    );
  }
}
