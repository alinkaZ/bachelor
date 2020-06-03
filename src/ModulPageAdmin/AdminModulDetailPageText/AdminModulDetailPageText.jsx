import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Breadcrumbs } from "../../ModulPage/Common/Breadcrumbs";
import { ButtonGroupAdmin } from "../CommonAdmin/ButtonGroupAdmin";
import { WordInput } from "../CommonAdmin/WordInput";
import { PaginationRow } from "../../ModulPage/Common/Pagination";
import { SaveDelete } from "../CommonAdmin/SaveDelete";
import { apiService } from "../../utils/API/apiService";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import {Editor, EditorState} from 'draft-js';
import 'draft-js/dist/Draft.css';

export class AdminModulDetailPageText extends Component {
  constructor(props) {
    super(props);
    let { modulId, lessonId } = this.props.info;
    this.state = {
      type: this.props.info.type,
      name: "",
      details: EditorState.createEmpty(),
      modulId: modulId,
      lessonId: lessonId,
    };
  }
  save = () => {
    console.log("Save lesson", this.state);
    apiService.createLesson(this.state.modulId, {
      type: this.state.type,
      name: this.state.name,
      details: this.state.details,
    });
  };
  delete = () => {
    console.log("Delete lesson");
    apiService.deleteLesson(this.state);
  };
  changeState = (event) => {
    let s = this.state;
    let field = event.target.id;
    s[field] = event.target.value;
    this.setState(s);
  };
  render() {
    return (
      <>
        <Row>
          <InputGroup>
            <FormControl
              as="textarea"
              aria-label="With textarea"
              value={this.state.name}
              onChange={this.changeState}
              id="name"
              rows="2"
            />
          </InputGroup>
        </Row>
        <br />
        <Row>
          <InputGroup>
            <FormControl
              as="textarea"
              aria-label="With textarea"
              value={this.state.details}
              onChange={this.changeState}
              id="details"
              rows="20"
            />
          </InputGroup>
        </Row>
        <Row>
          <Col xs={12} md={11}>
            <SaveDelete onSave={this.save} onDelete={this.delete} />
          </Col>
        </Row>
      </>
    );
  }
}
