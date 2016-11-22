import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './css/index.css';
import { IndexRoute, Router, Route, Link, hashHistory } from 'react-router';
import Why_Me from './Why_Me';
import About_Me from './About_Me';
import Projects from './Projects';

ReactDOM.render(
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Why_Me}/>
                <Route path="About_Me" component={About_Me}/>
                <Route path="Projects" component={Projects}/>
            </Route>
        </Router>,
  document.getElementById('root')
);
