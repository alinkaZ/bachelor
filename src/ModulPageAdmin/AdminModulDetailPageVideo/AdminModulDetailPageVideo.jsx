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

export class AdminModulDetailPageVideo extends Component {
  componentDidMount() {
    bsCustomFileInput.init();
  }

  render() {
    return (
      <>
        
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
            <SaveDelete />
          </Col>
        </Row>
      </>
    );
  }
}
