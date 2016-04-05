import React from 'react';
import ReactDOM from 'react-dom';
import PortfolioSite from './portfolio-site';
import MainPage from './main-page';
import AboutPage from './about-page';
import ProjectPage from './project-page';
import { Router, Route, Link, browserHistory } from 'react-router';

ReactDOM.render((
  <Router history={ browserHistory }>
    <Route path="/" component={ PortfolioSite }>
		  <Route path="/home" component={ MainPage }/>
			<Route path="/about" component={ AboutPage }/>
      <Route path="/project/:projectName" component={ ProjectPage }/>
    </Route>
  </Router>
), document.getElementById('app-container'));