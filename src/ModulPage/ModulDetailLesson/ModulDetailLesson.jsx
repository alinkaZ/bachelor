import React, { Component } from "react";
import { ModulDetailPageText } from "./ModulDetailPageText/ModulDetailPageText";
import { ModulDetailPageVideo } from "./ModulDetailPageVideo/ModulDetailPageVideo";
import { ModulDetailPageQuiz } from "./ModulDetailPageQuiz/ModulDetailPageQuiz";
import { withRouter, useParams } from "react-router";
import { lessonsData } from "../../Data/LessonsData";
import { Container, Row } from "reactstrap";
import { ButtonsPrevNext } from "../Common/ButtonsPrevNext";
import { CommentBox } from "../Common/CommentBox";
import { PaginationRow } from "../Common/Pagination";
import { Breadcrumbs } from "../Common/Breadcrumbs";
import { Header } from "../Common/Header";
import Col from "react-bootstrap/Col";
import { apiService } from "../../utils/API/apiService";
import { Finish } from "../Finish/Finish";

const ChangeLesson_STATES = {
  text: <ModulDetailPageText />,
  video: <ModulDetailPageVideo />,
  quiz: <ModulDetailPageQuiz />,
};

function ChangeLesson({ status }) {
  return <div>{ChangeLesson_STATES[status]}</div>;
}

function ModulLessonContent(param) {
  console.log("this.state.currentLesson", param.type);
  switch (param.type) { //param.type.trim() does not works
    case "text           ":
      return <ModulDetailPageText info={param} />;
    case "video          ":
      return <ModulDetailPageVideo info={param} />;
    case "quiz           ":
      return <ModulDetailPageQuiz info={param} />;
    default:
      return "Modul not found";
  }
}

export class ModulDetailLesson extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modulId: this.props.match.params.modulId,
      lessonId: this.props.match.params.lessonId,
      data: [],
      pageIndex: 0,
      pageCount: 0,
      currentLesson: {},
    };
  }
  toPrevious = () => {
    if (this.state.pageIndex + 1 < this.state.pageCount) {
      apiService.updateLessonByID(this.state.modulId, {
        type: this.state.type,
        name: this.state.name,
        details: this.state.details,
      });
      this.state.pageindex = this.state.pageIndex + 1;
    } else {
      this.state.currentLesson=<Finish />;
    }
  };

  toNext = () => {
    if (this.state.pageIndex - 1 > this.state.pageCount) {
      apiService.updateLessonByID(this.state.modulId, {
        type: this.state.type,
        name: this.state.name,
        details: this.state.details,
      });
      this.state.pageindex = this.state.pageIndex - 1;
    }
  };
  componentDidMount() {
    apiService.lessons(this.state.modulId).then((x) => {
      console.log(x);
      let tempData = this.state;
      this.state.data = x;
      this.state.pageCount = x.length;
      if (x.length > 0) {
        let lesson = this.state.data[this.state.pageIndex];
        this.state.currentLesson = lesson;
      }
      this.setState(tempData);
    });
  }

  /*fetch(`https://api.twitter.com/user/${handle}`)
        .then((user) => {
          this.setState(() => ({ user }))
        })*/
  render() {
    /*let { modulId, lessonId } = this.props.match.params;
    lessonId = lessonId * 1;
    console.log(modulId, lessonId);

    if (lessonsData.length >= lessonId) {
      let lesson = lessonsData[lessonId - 1];
      console.log(lesson);*/
    if (this.state.currentLesson) {
      return (
        <Container>
          <Row>
            <Breadcrumbs />
          </Row>
          <Row>
            <Col></Col>
            <Col xs={4} md={1}></Col>
            <PaginationRow />
            <Col></Col>
          </Row>
          <Row>
            <Header title={this.state.currentLesson.name} />
          </Row>
          <Row>{ModulLessonContent(this.state.currentLesson)}</Row>
          <Row>
            <ButtonsPrevNext
              info={this.state.currentLesson}
              toPreviousPage={this.toPrevious}
              toNextPage={this.toNext}
            />
          </Row>
          <Row>
            <Col xs={12} md={12}>
              <CommentBox />
            </Col>
          </Row>
        </Container>
      );
    } else {
      console.error("Error: We are trying to get lesson out of the arr");
      return <div>Sorry such lesson does not exist</div>;
    }
  }
}
const ShowTheLocationWithRouter = withRouter(ModulDetailLesson);
