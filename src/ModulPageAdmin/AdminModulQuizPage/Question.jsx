import React, { Component } from "react";
import { WordInput } from "../CommonAdmin/WordInput";
import InputGroup from "react-bootstrap/InputGroup";

export class AdminModulDetailPageQuiz extends Component {
  render() {
    return (
      <>
        <WordInput />
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Radio aria-label="Radio button for following text input" />
          </InputGroup.Prepend>
          <FormControl aria-label="Text input with radio button" />
        </InputGroup>
      </>
    );
  }
}
