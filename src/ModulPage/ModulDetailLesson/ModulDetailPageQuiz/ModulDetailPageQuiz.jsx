import React, { Component } from "react";

import { Header } from "../../Common/Header";
import { Question } from "./Question";

import { PopUpCorrectAnswer } from "./PopUpCorrectAnswer";
import { quizData } from "../../../Data/QuizData";

export class ModulDetailPageQuiz extends Component {
  render() {
    return (
      <>
        
        {/*<Header />*/}
        {quizData.map((item) => {
          return (
            <>
              <PopUpCorrectAnswer dataAnswers={item.tips} />
              <Question dataQuestions={item} />
            </>
          );
        })}

 
      </>
    );
  }
}
