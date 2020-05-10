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


const ChangeLesson_STATES = {
  text: <ModulDetailPageText />,
  video: <ModulDetailPageVideo />,
  quiz: <ModulDetailPageQuiz />,
};

function ChangeLesson({ status }) {
  return <div>{ChangeLesson_STATES[status]}</div>;
}

function ModulLessonContent(param) {
  switch (param.type) {
    case "text":
      return <ModulDetailPageText info={param} />;
    case "video":
      return <ModulDetailPageVideo info={param} />;
    case "quiz":
      return <ModulDetailPageQuiz info={param} />;
    default:
      return "Modul not found";
  }
}

export function ModulDetailLesson() {
  /*fetch(`https://api.twitter.com/user/${handle}`)
        .then((user) => {
          this.setState(() => ({ user }))
        })*/

  let { modulId, lessonId } = useParams();
  lessonId = lessonId * 1;
  console.log(modulId, lessonId);

  if (lessonsData.length >= lessonId) {
    let lesson = lessonsData[lessonId - 1];
    console.log(lesson);
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
        <Header title={lesson.title} />
        </Row>
        <Row>
        {ModulLessonContent(lesson)}
        </Row>
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
  } else {
    console.error("Error: We are trying to get lesson out of the arr");
    return <div>Sorry such lesson does not exist</div>;
  }
}
const ShowTheLocationWithRouter = withRouter(ModulDetailLesson);
