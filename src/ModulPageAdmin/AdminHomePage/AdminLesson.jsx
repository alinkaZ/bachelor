import React, { Component } from "react";
import { AdminModulDetailPageText } from "../AdminModulDetailPageText/AdminModulDetailPageText";
import { AdminModulDetailPageVideo } from "../AdminModulDetailPageVideo/AdminModulDetailPageVideo";
import { AdminModulDetailPageQuiz } from "../AdminModulQuizPage/AdminModulQuizPage";
import { withRouter, useParams } from "react-router";
import { lessonsData } from "../../Data/LessonsData";
import { Container, Row } from "reactstrap";
import { ButtonsPrevNext } from "../../ModulPage/Common/ButtonsPrevNext";
import { CommentBox } from "../../ModulPage/Common/CommentBox";
import { PaginationRow } from "../../ModulPage/Common/Pagination";
import { Breadcrumbs } from "../../ModulPage/Common/Breadcrumbs";
import { Header } from "../../ModulPage/Common/Header";
import Col from "react-bootstrap/Col";
import { ButtonGroupAdmin } from "../CommonAdmin/ButtonGroupAdmin";

const ChangeLesson_STATES = {
  text: <AdminModulDetailPageText />,
  video: <AdminModulDetailPageVideo />,
  quiz: <AdminModulDetailPageQuiz />,
};

function ChangeLesson({ status }) {
  return <div>{ChangeLesson_STATES[status]}</div>;
}

function AdminModulLessonContent(param) {
  switch (param.type) {
    case "text":
      return <AdminModulDetailPageText info={param} />;
    case "video":
      return <AdminModulDetailPageVideo info={param} />;
    case "quiz":
      return <AdminModulDetailPageQuiz info={param} />;
    default:
      return "Modul not found";
  }
}

export class AdminModulDetailLesson extends Component {
  /*fetch(`https://api.twitter.com/user/${handle}`)
        .then((user) => {
          this.setState(() => ({ user }))
        })*/
  constructor(props) {
    super(props);
    let { modulId, lessonId } = this.props.match.params;
    this.state={
        
            id: 0,
            type: "text",
            modulId: modulId,
            lessonId: lessonId,
            title: "",
            details: {
              text: "",
            },
    
  }
}
  onLessonTypeChange=(value)=>{
    let lessonTmp = this.state;
    lessonTmp.type = value;
    this.setState( lessonTmp);
  }

  render() {
    
    let { modulId, lessonId } = this.props.match.params;
    lessonId = lessonId * 1;
    console.log(modulId, lessonId);
  
    if (lessonsData.length < lessonId) {
      this.setState(lessonsData[lessonId - 1]);
    }

    return (
      <Container fluid>
        <Row>
          <Col xs={12} md={12}>
            <Breadcrumbs />
            <ButtonGroupAdmin onLessonTypeChange={this.onLessonTypeChange} />
          </Col>
        </Row>
        <Row>
          <Col></Col>
          <Col xs={12} md={2}>
            <PaginationRow />
          </Col>
          <Col></Col>
        </Row>
        {AdminModulLessonContent(this.state)}
        <Row>
          <ButtonsPrevNext />
        </Row>
        <Row>
          <Col xs={12} md={12}>
            <CommentBox />
          </Col>
        </Row>
      </Container>
    );
  }
}
const ShowTheLocationWithRouter = withRouter(AdminModulDetailLesson);
