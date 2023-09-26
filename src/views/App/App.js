/**
 Copyright (c) 2020, Xgrid Inc, https://xgrid.co

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */

// React imports
import React, { Fragment } from "react";

// React router imports
import {
  BrowserRouter as Router, Switch, Route, Link
} from 'react-router-dom';

// Styles imports
import "./App.scss";

// Browser history imports
import { createBrowserHistory } from 'history';

// Routes import
import routes from "../../app-routing";

//  Todo: We might remove this later
const hist = createBrowserHistory();

class App extends React.Component {
  render() {
    return (
      <Fragment>
        <Router history={hist}>
          <Switch>
            {routes.map((res, index) => {
              return(
                <Route exact
                       path={res.path}
                       key={index}
                       component={res.component} />
              )
            })}
          </Switch>
        </Router>
      </Fragment>
    );
  }
}

export default App;
