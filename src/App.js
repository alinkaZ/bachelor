import React, { Component } from 'react';
import { ModuleCard } from './ModuleCard';
import { NewCard } from './Homepage/NewCard';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route } from 'react-router';
import { Layout } from './Layout/Layout';
import { InfoModul } from './ModulMainPage/InfoModul';
import { CardModules } from './Homepage/CardModules';
import { ModulForm} from './ModulMainPage/ModulForm';
import { AboutPage } from './AboutPage/AboutPage';
import { LoginPage } from './LoginPage/LoginPage';
import { ModulDetailPage } from './ModulDetailPageText/ModulDetailPageText';


export default class App extends Component {
   render () {
    return (
      <Layout>
        <Route exact path='/' component={LoginPage} />
        <Route path='/login' component={LoginPage} />
        <Route path='/modules' component ={CardModules} />
        <Route path='/about' component ={AboutPage} />
        <Route path='/modules1' component={ModulForm}/>
      </Layout>
    );
  }
}




