/**
 * @Author: Tomonori
 * @Date: 2020/2/26 16:54
 * @Title:
 * @Desc: ↓ ↓ ↓ ↓ ↓
 * -----
 */
import * as React from "react";
import {HashRouter} from "react-router-dom";
import {Redirect, Route, Switch} from "react-router";

import Home from "./views/Home";
import E404 from "./views/E404";
import Topic from "./views/Topic";
import Header from "./components/Header";

interface IPropTypes {
}

interface IStateTypes {
}

export default class App extends React.Component<IPropTypes, IStateTypes> {

  public render() {
    return (
        <div className="main">
          <Header></Header>

          <HashRouter>
            <div className="container">
              <Switch>
                <Route path={"/home"} component={Home}></Route>
                <Route path={"/404"} component={E404}></Route>
                <Route path={"/topic/:id"} component={Topic}></Route>
                <Route render={() => <Redirect to={"/home"} />}></Route>
              </Switch>
            </div>
          </HashRouter>
        </div>

    );
  }
}
