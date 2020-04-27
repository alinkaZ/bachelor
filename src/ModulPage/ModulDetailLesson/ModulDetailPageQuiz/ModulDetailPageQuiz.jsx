import React, { Component } from "react";
import { Pagination, Container } from "reactstrap";
import { ButtonsPrevNext } from "../../Common/ButtonsPrevNext";
import { CommentBox } from "../../Common/CommentBox";
import { PaginationRow } from "../../Common/Pagination";
import { Header } from "../ModulDetailPageText/Header";
import { Question } from "./Question";
import { Breadcrumbs } from "../../Common/Breadcrumbs";
import { PopUpCorrectAnswer } from "./PopUpCorrectAnswer";
import { quizData } from "../../../Data/QuizData";

export class ModulDetailPageQuiz extends Component {
  render() {
    return (
      <Container>
        <Breadcrumbs />
        <PaginationRow />
        <Header />
        {quizData.map((item) => {
          return (
            <>
              <PopUpCorrectAnswer dataAnswers={item.tips} />
              <Question dataQuestions={item} />
            </>
          );
        })}

        <ButtonsPrevNext />
        <CommentBox />
      </Container>
    );
  }
}
