import React, { Component } from "react";
import { ModuleCard } from "./ModuleCard";
import { NewCard } from "./Homepage/NewCard";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route } from "react-router";
import { Layout } from "./Layout/Layout";
import { InfoModul } from "./ModulPage/ModulMainPage/InfoModul";
import { CardModules } from "./Homepage/CardModules";
import { ModulForm } from "./ModulPage/ModulMainPage/ModulForm";
import { AboutPage } from "./AboutPage/AboutPage";
import { LoginPage } from "./LoginPage/LoginPage";
import { ModulDetailPageText } from "./ModulPage/ModulDetailPageText/ModulDetailPageText";
import { ModulDetailPageVideo } from "./ModulPage/ModulDetailPageVideo/ModulDetailPageVideo";
import { ModulDetailPageQuiz } from "./ModulPage/ModulDetailPageQuiz/ModulDetailPageQuiz";
import { Finish } from "./ModulPage/Finish/Finish";
import { CardModulesAdmin } from "./ModulPageAdmin/AdminHomePage/AdminHomePage";
import { AdminModulMainPage } from "./ModulPageAdmin/AdminModulMainPage/AdminModulMainPage";
import { AdminModulDetailPageText } from "./ModulPageAdmin/AdminModulDetailPageText/AdminModulDetailPageText";

export default class App extends Component {
  render() {
    return (
      <Layout>
        <Route exact path="/" component={LoginPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/modules" component={CardModules} />
        <Route path="/about" component={AboutPage} />
        <Route path="/modules1" component={ModulForm} />
        <Route path="/detailText" component={ModulDetailPageText} />
        <Route path="/video" component={ModulDetailPageVideo} />
        <Route path="/quiz" component={ModulDetailPageQuiz} />
        <Route path="/finish" component={Finish} />
        <Route path="/admin" component={CardModulesAdmin} />
        <Route path="/create" component={AdminModulMainPage} />
        <Route path="/adminText" component={AdminModulDetailPageText} />
      </Layout>
    );
  }
}
