/**
 * @Author: Tomonori
 * @Date: 2020/2/26 18:48
 * @Title:
 * @Desc: ↓ ↓ ↓ ↓ ↓
 * -----
 */
import React, {FunctionComponent} from "react";

import ko from "../assets/images/ko.jpg"
import Banner from "../components/Banner";
import Input from "../components/Input";


const Home: FunctionComponent = () => {

  return (
      <div>
        <Banner></Banner>
        <Input></Input>
        <div className="text">会说话就多说点</div>
        <img src={ko}/>
      </div>
  )
};

export default Home;
