import React, { Component } from "react";
import { ModuleCard } from "./ModuleCard";
import { NewCard } from "./Homepage/NewCard";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router";
import { Layout } from "./Layout/Layout";
import { InfoModul } from "./ModulPage/ModulMainPage/InfoModul";
import { CardModules } from "./Homepage/CardModules";
import { ModulForm } from "./ModulPage/ModulMainPage/ModulForm";
import { AboutPage } from "./AboutPage/AboutPage";
import { LoginPage } from "./LoginPage/LoginPage";

import { Finish } from "./ModulPage/Finish/Finish";
import { CardModulesAdmin } from "./ModulPageAdmin/AdminHomePage/AdminHomePage";
import { AdminModulMainPage } from "./ModulPageAdmin/AdminModulMainPage/AdminModulMainPage";
import { AdminModulDetailPageText } from "./ModulPageAdmin/AdminModulDetailPageText/AdminModulDetailPageText";
import { AdminModulDetailPageVideo } from "./ModulPageAdmin/AdminModulDetailPageVideo/AdminModulDetailPageVideo";
import { lessonsData } from "./Data/LessonsData";
import { ModulDetailLesson } from "./ModulPage/ModulDetailLesson/ModulDetailLesson";
import { AdminModulDetailPageQuiz } from "../src/ModulPageAdmin/AdminModulQuizPage/AdminModulQuizPage";

export default class App extends Component {
  render() {
    const sessionToken = localStorage.getItem("sessionToken");
    return (
      <Layout>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/modules" exact component={CardModules} />
          <Route path="/about" component={AboutPage} />
          <Route exact path={"/modules/:modulId"}>
            <ModulForm />
          </Route>
          <Route exact path="/modules/:modulId/lessons/:lessonId">
            <ModulDetailLesson />
          </Route>
          <Route exact path={"/modules/:modulId/:finishId"}>
            <Finish />
          </Route>

          <Route path="/admin" component={CardModulesAdmin} />
          <Route path="/create" component={AdminModulMainPage} />
          <Route path="/textAdmin" component={AdminModulDetailPageText} />
          <Route path="/videoAdmin" component={AdminModulDetailPageVideo} />
          <Route path="/quizAdmin" component={AdminModulDetailPageQuiz} />
        </Switch>
      </Layout>
    );
  }
}
