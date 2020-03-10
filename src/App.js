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
import { ModulDetailPageText } from './ModulDetailPageText/ModulDetailPageText';
import { ModulDetailPageVideo } from './ModulDetailPageVideo/ModulDetailPageVideo';
import { ModulDetailPageQuiz } from './ModulDetailPageQuiz/ModulDetailPageQuiz';
import { Finish } from './Finish/Finish';


export default class App extends Component {
   render () {
    return (
      <Layout>
        <Route exact path='/' component={LoginPage} />
        <Route path='/login' component={LoginPage} />
        <Route path='/modules' component ={CardModules} />
        <Route path='/about' component ={AboutPage} />
        <Route path='/modules1' component={ModulForm}/>
        <Route path='/detailText' component={ModulDetailPageText}/>
        <Route path='/video' component={ModulDetailPageVideo}/>
        <Route path='/quiz' component={ModulDetailPageQuiz}/>
        <Route path='/finish' component={Finish}/>

      </Layout>
    );
  }
}




