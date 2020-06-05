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
      pageIndex: 0,
      lessons: [],
      modulId: modulId,
     
      currentLesson: {
        id: 0,
        type: "text",
        modulId: modulId,
        lessonID: 0,
        title: "",
        details: {
          text: "",
        },
      },
    };
  }
  changePage = (index) => {
    if (index > 0 && index <= this.state.pageCount) {
      this.setState({
        pageIndex: index - 1,
        currentLesson: this.state.lessons[index - 1],
        //lessonId: this.state.lessons[this.state.pageIndex - 1].lessonID,
      });
    }
  };

  onLessonTypeChange = (value) => {
    console.log(value);
    let lessonTmp = this.state;
    lessonTmp.currentLesson.type = value;
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
    if (this.state.currentLesson.lessonID == 0) {
      apiService.createLesson(this.state.modulId, {
        type: this.state.currentLesson.type,
        name: this.state.currentLesson.name,
        details: this.state.currentLesson.details,
      });
    } else {
      apiService.updateLessonByID(
        this.state.modulId,
        this.state.currentLesson.lessonID,
        {
          type: this.state.currentLesson.type,
          name: this.state.currentLesson.name,
          details: this.state.currentLesson.details,
          lessonID: this.state.currentLesson.lessonID,
          moduleID: this.state.modulId * 1,
        }
      );
    }
  };
  delete = () => {
    console.log("Delete lesson", this.state);
    if (this.state.currentLesson.lessonID != 0) {
      apiService.deleteLessonByID(this.state.modulId, this.state.currentLesson.lessonID, {
        type: this.state.currentLesson.type,
        name: this.state.currentLesson.name,
        details: this.state.currentLesson.details,
      });
    } 
  };

 
  onLessonChange = (lessonData) => {
    let data = this.state;
    data.currentLesson.name = lessonData.name;
    data.currentLesson.details = lessonData.details;
    data.currentLesson.lessonID = lessonData.lessonID;

    this.setState(data);
    console.log("lessonsData", data);
  };

  componentDidMount() {
    this.setState({
      modulId: this.props.match.params.modulId,
      lessonId: this.props.match.params.lessonId,
    });
    apiService.lessons(this.props.match.params.modulId).then((data) => {
      if (data.length > 0)
        this.setState({
          pageCount: data.length,
          lessons: data,
          currentLesson: data[0],
        });
      console.log("component", this.state);
    });
  }

  render() {
    let { modulId, lessonId } = this.props.match.params;
    lessonId = lessonId * 1;
    console.log(modulId, lessonId);

    /*if (lessonsData.length < lessonId) {
      this.setState(lessonsData[lessonId - 1]);
    }*/

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
            <PaginationRow
              pageIndex={this.state.pageIndex}
              pageCount={this.state.pageCount}
              toPage={this.changePage}
              toPreviousPage={this.toPrevious}
              toNextPage={this.toNext}
            />
          </Col>
          <Col></Col>
        </Row>
        {
          {
            text: (
              <AdminModulDetailPageText
                info={this.state.currentLesson}
                onLessonChange={this.onLessonChange}
              />
            ),
            video: (
              <AdminModulDetailPageVideo
                info={this.state.currentLesson}
                onLessonChange={this.onLessonChange}
              />
            ),
            quiz: (
              <AdminModulDetailPageQuiz
                info={this.state.currentLesson}
                onLessonChange={this.onLessonChange}
              />
            ),
          }[this.state.currentLesson.type]
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
