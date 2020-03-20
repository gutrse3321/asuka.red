/**
 * @Author: Tomonori
 * @Date: 2020/2/26 18:48
 * @Title:
 * @Desc: ↓ ↓ ↓ ↓ ↓
 * -----
 */
import React, {FunctionComponent} from "react";

import Banner from "../components/Banner";
import Input from "../components/Input";
import Panel from "../components/Panel";

import {YesNo} from "../util/Constant";

const Home: FunctionComponent = () => {

  const topicSubmit: (title: string, content: string) => void = async (title: string, content: string) => {
    //TODO component request
    console.log(`[Home] title: ${title}, content: ${content}`);
  };

  return (
      <div>
        <Banner></Banner>

        <Input
            isTopic={Boolean(YesNo.Yes)}
            handleClick={topicSubmit}
        ></Input>

        <Panel></Panel>
      </div>
  )
};

export default Home;
