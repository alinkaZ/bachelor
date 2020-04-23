import React, { Component } from "react";
import { Pagination, Container } from "reactstrap";
import { ButtonsPrevNext } from "../ModulDetailPageText/ButtonsPrevNext";
import { CommentBox } from "../ModulDetailPageText/CommentBox";
import { PaginationRow } from "../ModulDetailPageText/Pagination";
import { Header } from "../ModulDetailPageText/Header";
import { Question } from "./Question";
import { Breadcrumbs } from "../../ModulPage/Breadcrumbs";
import { PopUpCorrectAnswer } from "../ModulDetailPageQuiz/PopUpCorrectAnswer";
import { quizData } from "../../Data/QuizData";

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
