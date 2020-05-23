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


export class AdminModulDetailPageText extends Component {
  constructor(props) {
    super(props);
    let { modulId, lessonId } = this.props.info;
    this.state=this.props.info;
}
save=()=>{
  console.log("Save lesson");
  apiService.createLesson(this.state);
}
delete=()=>{
  console.log("Delete lesson");
  apiService.deleteLesson(this.state);
}
  render() {
    return (
      <>
       
        <Row>
          <WordInput rows="20" />
        </Row>
        <Row>
          <Col xs={12} md={11}>
          <SaveDelete onSave={this.save} onDelete={this.delete}/>
          </Col>
        </Row>
      </>
    );
  }
}
