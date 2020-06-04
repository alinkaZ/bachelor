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
import { SaveDelete } from "../CommonAdmin/SaveDelete";
import { apiService } from "../../utils/API/apiService";

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
    this.state = {
      id: 0,
      type: "text",
      modulId: modulId,
      lessonId: lessonId,
      title: "",
      details: {
        text: "",
      },
    };
  }
  onLessonTypeChange = (value) => {
    console.log(value);
    let lessonTmp = this.state;
    lessonTmp.type = value;
    this.setState(lessonTmp);
  };
  toPrevious = () => {
    if (this.state.pageIndex > 0) {
      this.setState({
        pageIndex: this.state.pageIndex - 1,
        currentLesson: this.state.lessons[this.state.pageIndex - 1],
      });
    }
  };

  toNext = () => {
    if (this.state.pageIndex < this.state.lessons.length - 1) {
      this.setState({
        pageIndex: this.state.pageIndex + 1,
        currentLesson: this.state.lessons[this.state.pageIndex + 1],
      });
    } else {
      this.setState({
        pageIndex: this.state.lessons.length,
        currentLesson: {},
      });
    }
  };
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
  onLessonChange

  componentDidMount() {
    this.setState({
      modulId: this.props.match.params.modulId,
      lessonId: this.props.match.params.lessonId,
    });
    apiService.lessons(this.props.match.params.modulId).then((data) => {
      this.setState({
        pageCount:data.length,
        lessons: data,
        currentLesson: data[0],
      });
      console.log("component", this.state)
    });
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
        {
          {
            text: <AdminModulDetailPageText info={this.state} />,
            video: <AdminModulDetailPageVideo info={this.state} />,
            quiz: <AdminModulDetailPageQuiz info={this.state} />,
          }[this.state.type]
        }
        <Row>
          <ButtonsPrevNext
            info={this.state.currentLesson}
            toPreviousPage={this.toPrevious}
            toNextPage={this.toNext}
          />
        </Row>
        <Row>
          <Col xs={12} md={11}>
            <SaveDelete onSave={this.save} onDelete={this.delete} />
          </Col>
        </Row>
        
      </Container>
    );
  }
}
const ShowTheLocationWithRouter = withRouter(AdminModulDetailLesson);
