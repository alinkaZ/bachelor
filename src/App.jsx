import React, { Component } from "react";
import { ModuleCard } from "./ModuleCard";
import { NewCard } from "./Homepage/NewCard";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router";
import { Layout } from "./Layout/Layout";
import { CardModules } from "./Homepage/CardModules";
import { ModulForm } from "./ModulPage/ModulMainPage/ModulForm";
import { AboutPage } from "./AboutPage/AboutPage";
import { LoginPage } from "./LoginPage/LoginPage";
import { Finish } from "./ModulPage/Finish/Finish";
import { CardModulesAdmin } from "./ModulPageAdmin/AdminHomePage/AdminHomePage";
import { AdminModulMainPage } from "./ModulPageAdmin/AdminModulMainPage/AdminModulMainPage";
import { ModulDetailLesson } from "./ModulPage/ModulDetailLesson/ModulDetailLesson";
import { AdminModulDetailLesson } from "./ModulPageAdmin/AdminHomePage/AdminLesson";

export default class App extends Component {
  render() {
    const sessionToken = localStorage.getItem("sessionToken");
    return (
      <Layout>
        <Switch>
          <Route exact path="/" component={CardModules} />
          <Route path="/login" component={LoginPage} />
          <Route path="/modules" exact component={CardModules} />
          <Route path="/about" component={AboutPage} />
          <Route
            exact
            path={"/modules/:modulId"}
            render={(props) => <ModulForm {...props} />}
          ></Route>
          <Route exact path="/modules/:modulId/lessons/:lessonId">
            <ModulDetailLesson />
          </Route>
          <Route exact path={"/modules/:modulId/finish"}>
            <Finish />
          </Route>
          <Route path="/admin" component={CardModulesAdmin} />
          <Route path="/create" component={AdminModulMainPage} />
          <Route
            exact
            path="/modules/:modulId/edit"
            component={AdminModulMainPage}
          />
          <Route
            exact
            path="/modules/:modulId/edit/lessons/create"
            component={AdminModulDetailLesson}
          />

          <Route
            exact
            path="/modules/:modulId/edit/lessons/:lessonId/edit"
            component={AdminModulDetailLesson}
          />

          {/*<Route path="/textAdmin" component={AdminModulDetailPageText} />
          <Route path="/videoAdmin" component={AdminModulDetailPageVideo} />
          <Route path="/quizAdmin" component={AdminModulDetailPageQuiz} />*/}
        </Switch>
      </Layout>
    );
  }
}
