/**
 * @Author: Tomonori
 * @Date: 2020/2/26 16:54
 * @Title:
 * @Desc: ↓ ↓ ↓ ↓ ↓
 * -----
 */
import React, { lazy, Suspense } from "react";
import {HashRouter} from "react-router-dom";
import {Redirect, Route, Switch} from "react-router";

/**
 * async components
 */
const Home = lazy(() => import("./views/Home"));
const E404 = lazy(() => import("./views/E404"));
const Topic = lazy(() => import("./views/Topic"));

/**
 * sync components
 */
import Header from "./components/Header";

interface IPropTypes {
}

interface IStateTypes {
}

export default class App extends React.Component<IPropTypes, IStateTypes> {

  public render() {
    return (
        <div className={"main"}>
          <Header></Header>

          <HashRouter>
            <div className={"container"}>
              <Suspense fallback={<div>骚等 ...</div>}>
                <Switch>
                  <Route path={"/home"} component={Home}></Route>
                  <Route path={"/404"} component={E404}></Route>
                  <Route path={"/topic/:id"} component={Topic}></Route>
                  <Route render={() => <Redirect to={"/home"} />}></Route>
                </Switch>
              </Suspense>
            </div>
          </HashRouter>
        </div>

    );
  }
}
