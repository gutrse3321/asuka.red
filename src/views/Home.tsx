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
import {TopicModel} from "../model/TopicModel";

import api from "../api/v1";

const Home: FunctionComponent = () => {

  const list: Array<TopicModel> = [
    {
      id: 1,
      title: "fuck",
      content: "shit",
      createTime: "1584699394289"
    },
    {
      id: 2,
      title: "other",
      content: "shit",
      createTime: "1584699404152"
    }
  ];

  const topicSubmit: (title: string, content: string) => void = async (title: string, content: string) => {
    //TODO component request
    try {
      let resp = await api.fuck({title, content});
    } catch (e) {
      //TODO throws some exception
    }
  };

  return (
      <div>
        <Banner></Banner>

        <Input
            isTopic={Boolean(YesNo.Yes)}
            handleClick={topicSubmit}
        ></Input>

        <Panel list={list}></Panel>
      </div>
  )
};

export default Home;
