import React, { Component } from "react";
import { ModulDetailPageText } from "./ModulDetailPageText/ModulDetailPageText";
import { ModulDetailPageVideo } from "./ModulDetailPageVideo/ModulDetailPageVideo";
import { ModulDetailPageQuiz } from "./ModulDetailPageQuiz/ModulDetailPageQuiz";
import { withRouter, useParams } from "react-router";
import PropTypes from "prop-types";
import { lessonsData } from "../../Data/LessonsData";

const ChangeLesson_STATES = {
  text: <ModulDetailPageText />,
  video: <ModulDetailPageVideo />,
  quiz: <ModulDetailPageQuiz />,
};

function ChangeLesson({ status }) {
  return <div>{ChangeLesson_STATES[status]}</div>;
}

function ModulLessonContent(param) {
  switch (param) {
    case param == "text":
      return <ModulDetailPageText />;

    case param == "video":
      return <ModulDetailPageVideo />;

    case param == "quiz":
      return <ModulDetailPageQuiz />;
  }
}

export function ModulDetailLesson() {
  /*fetch(`https://api.twitter.com/user/${handle}`)
        .then((user) => {
          this.setState(() => ({ user }))
        })*/

  let { modulId, lessonId } = useParams();
  // modulId = modulId * 1; //become as a number
  //lessonId = lessonId * 1;
  console.log(modulId, lessonId);

  var lessonFilterResult = lessonsData.filter(function (item) {
    return item.id === lessonId && item.modulId === modulId;
  });
  if (lessonFilterResult.length > 0) {
    let lesson = lessonFilterResult[0];
    return ChangeLesson({ status: lesson.type });
  } else {
    return <div>here should be smth</div>;
  }
  console.log(lessonFilterResult);
}
const ShowTheLocationWithRouter = withRouter(ModulDetailLesson);
