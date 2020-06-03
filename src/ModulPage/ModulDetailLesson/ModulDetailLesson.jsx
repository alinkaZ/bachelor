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
  console.log("LessonID", param.lessonID);
  switch (param.type) { //param.type.trim() does not works
    case ("text" || "text           "):
      return <ModulDetailPageText info={param} />;
    case ("video" ||  "video          "):
      return <ModulDetailPageVideo info={param} />;
    case ("quiz" ||  "quiz           "):
      return <ModulDetailPageQuiz info={param} />;
    default:
      return <Finish />;
  }
}

export class ModulDetailLesson extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modulId: "",
      lessonId: "",
      lessons: [],
      pageIndex: 0,
      pageCount: 0,
      currentLesson: {},
    };
  }
  toPrevious = () => {
    if (this.state.pageIndex > 0) {
      this.setState({
        pageIndex: this.state.pageIndex - 1,
        currentLesson: this.state.lessons[this.state.pageIndex - 1]
      })
    }
  };

  toNext = () => {
    if (this.state.pageIndex < this.state.lessons.length - 1) {
      this.setState({
        pageIndex: this.state.pageIndex + 1,
        currentLesson: this.state.lessons[this.state.pageIndex + 1]
      })
    } else {
      this.setState({
        pageIndex: this.state.lessons.length,
        currentLesson: {}
      })
    }
  };

  componentDidMount() {
    this.setState({
      modulId: this.props.match.params.modulId,
      lessonId: this.props.match.params.lessonId
    })
    apiService.lessons(this.props.match.params.modulId).then((data) => {
      this.setState({
        lessons: data,
        currentLesson: data[0]
      })
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
