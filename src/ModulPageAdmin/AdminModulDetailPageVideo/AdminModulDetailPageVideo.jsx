import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Breadcrumbs } from "../../ModulPage/Common/Breadcrumbs";
import { ButtonGroupAdmin } from "../CommonAdmin/ButtonGroupAdmin";
import Form from "react-bootstrap/Form";
import { PaginationRow } from "../../ModulPage/Common/Pagination";
import { SaveDelete } from "../CommonAdmin/SaveDelete";
import "../AdminModulDetailPageVideo/AdminVideo.css";
import bsCustomFileInput from "bs-custom-file-input";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import { apiService } from "../../utils/API/apiService";

export class AdminModulDetailPageVideo extends Component {
  constructor(props) {
    super(props);
    let { modulId, lessonId } = this.props.info;
    this.state = {
      type: this.props.info.type,
      name: "",
      details: "",
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
  componentDidMount() {
    bsCustomFileInput.init();
  }

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
          <Col></Col>
          <Col xs={12} md={6}>
            <div className="videoBox">
              <Form>
                <Form.File
                  id="custom-file-translate-scss"
                  label=""
                  lang="en"
                  custom
                />
              </Form>
            </div>
          </Col>
          <Col></Col>
        </Row>
        <Row></Row>
        <Row>
          <Col xs={12} md={12}>
            <SaveDelete onSave={this.save} onDelete={this.delete} />
          </Col>
        </Row>
      </>
    );
  }
}
