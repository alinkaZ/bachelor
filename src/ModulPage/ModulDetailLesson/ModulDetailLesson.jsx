import React, { Component } from "react";
import { ModulDetailPageText } from "./ModulDetailPageText/ModulDetailPageText";
import { ModulDetailPageVideo } from "./ModulDetailPageVideo/ModulDetailPageVideo";
import { ModulDetailPageQuiz } from "./ModulDetailPageQuiz/ModulDetailPageQuiz";
import { withRouter, useParams } from "react-router";
import PropTypes from "prop-types";
import { lessonsData } from "../../Data/LessonsData";
import { Container } from "reactstrap";
import { ButtonsPrevNext } from "../Common/ButtonsPrevNext";
import { CommentBox } from "../Common/CommentBox";
import { PaginationRow } from "../Common/Pagination";
import { Breadcrumbs } from "../Common/Breadcrumbs";

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
  // modulId = modulId * 1; //become as a number
  lessonId = lessonId * 1;
  console.log(modulId, lessonId);

  /*var lessonFilterResult = lessonsData.filter(function (item) {
    return item.id === lessonId && item.modulId === modulId;
  });*/

  if (lessonsData.length >= lessonId) {
    let lesson = lessonsData[lessonId - 1];
    return (
      <Container>
        <Breadcrumbs />
        <PaginationRow />
        {ModulLessonContent(lesson)}
        <ButtonsPrevNext />
        <CommentBox />
      </Container>
    );
  } else {
    console.error("Error: We are trying to get lesson out of the arr");
    return <div>Sorry such lesson does not exist</div>;
  }
  //console.log(lessonFilterResult);
}
const ShowTheLocationWithRouter = withRouter(ModulDetailLesson);
