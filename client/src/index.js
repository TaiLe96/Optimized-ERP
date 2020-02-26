import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import Register from "./pages/Register/Register";
import Employee from "./pages/Employee/Employee";
import { Route, Switch, BrowserRouter } from "react-router-dom";

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(
    <BrowserRouter>
      <App>
        <Switch>
          <Route exact path='/register' component={Register} />
          <Route path='/employee' component={Employee} />
        </Switch>
      </App>
    </BrowserRouter>,
    document.getElementById('root')
  )
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
