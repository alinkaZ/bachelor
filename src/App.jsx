import React, { Component } from "react";
import { ModuleCard } from "./ModuleCard";
import { NewCard } from "./Homepage/NewCard";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
//import { Route, Switch } from "react-router";
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
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
  useRouteMatch,
} from "react-router-dom";

export default class App extends Component {
  
  render() {
    console.log("pros", process.env.PUBLIC_URL )
    const sessionToken = localStorage.getItem("sessionToken");
    return (
      <Router basename={'/bachelor'}>
        <Layout>
          <Switch>
            <Route exact path="/" component={CardModules} />
            <Route path="${process.env.PUBLIC_URL}/login" component={LoginPage} />
            <Route path="${process.env.PUBLIC_URL}/modules" exact component={CardModules} />
            <Route path="${process.env.PUBLIC_URL}/about" component={AboutPage} />
            <Route
              exact
              path={"${process.env.PUBLIC_URL}/modules/:modulId"}
              render={(props) => <ModulForm {...props} />}
            ></Route>
            <Route
              exact
              path="${process.env.PUBLIC_URL}/modules/:modulId/lessons/:lessonId"
              component={ModulDetailLesson}
            ></Route>
            <Route exact path={"${process.env.PUBLIC_URL}/modules/:modulId/finish"}>
              <Finish />
            </Route>
            <Route path="${process.env.PUBLIC_URL}/admin" component={CardModulesAdmin} />
            <Route path="${process.env.PUBLIC_URL}/create" component={AdminModulMainPage} />
            <Route
              exact
              path="${process.env.PUBLIC_URL}/modules/:modulId/edit"
              component={AdminModulMainPage}
            />
            <Route
              exact
              path="${process.env.PUBLIC_URL}/modules/:modulId/edit/lessons/create"
              component={AdminModulDetailLesson}
            />

            <Route
              exact
              path="${process.env.PUBLIC_URL}/modules/:modulId/edit/lessons/:lessonId/edit"
              component={AdminModulDetailLesson}
            />
          </Switch>
        </Layout>
      </Router>
    );
  }
}
