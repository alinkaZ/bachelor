import React, { Component } from 'react';
import { ModuleCard } from './ModuleCard';
import { NewCard } from './Homepage/NewCard';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import { Route, Switch } from "react-router";
import { Layout } from './Layout/Layout';
import { CardModules } from './Homepage/CardModules';
import { ModulForm } from './ModulPage/ModulMainPage/ModulForm';
import { AboutPage } from './AboutPage/AboutPage';
import { LoginPage } from './LoginPage/LoginPage';
import { Finish } from './ModulPage/Finish/Finish';
import { CardModulesAdmin } from './ModulPageAdmin/AdminHomePage/AdminHomePage';
import { AdminModulMainPage } from './ModulPageAdmin/AdminModulMainPage/AdminModulMainPage';
import { ModulDetailLesson } from './ModulPage/ModulDetailLesson/ModulDetailLesson';
import { AdminModulDetailLesson } from './ModulPageAdmin/AdminHomePage/AdminLesson';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
  useRouteMatch,
} from 'react-router-dom';

export default class App extends Component {

  constructor(props) {
    super(props);
  }
  render() {
    console.log('pros', process.env.PUBLIC_URL);
    const sessionToken = localStorage.getItem('sessionToken');
    /** basename={'/bachelor'} */
    console.log(this.props.match);
    return (
      <Router basename={"/bachelor"} > {/* ${process.env.PUBLIC_URL} "http://alinkaz.github.io/bachelor",*/}
        <Layout>
          <Switch>
            <Route exact path="/" component={CardModules} />
            <Route
              path="/login"
              component={LoginPage}
            />
            <Route
              path="/modules" 
              exact
              component={CardModules}
            />
            <Route
              path="/about"
              component={AboutPage}
            />
            <Route
              exact
              path={"/modules/:modulId"}
              render={(props) => <ModulForm {...props} />}
            ></Route>
            <Route
              exact
              path="/modules/:modulId/lessons/:lessonId"
              component={ModulDetailLesson}
            ></Route>
            <Route
              exact
              path={"/modules/:modulId/finish"}
            >
              <Finish />
            </Route>
            <Route
              path="/admin"
              component={CardModulesAdmin}
            />
            <Route
              path="/create"
              component={AdminModulMainPage}
            />
            <Route
              exact
              path="/modules/:modulId/edit"
              component={AdminModulMainPage}
            />
            <Route
              exact
              path='/modules/:modulId/edit/lessons/create'
              component={AdminModulDetailLesson}
            />

            <Route
              exact
              path='/modules/:modulId/edit/lessons/:lessonId/edit'
              component={AdminModulDetailLesson}
            />
          </Switch>
        </Layout>
      </Router>
    );
  }
}
