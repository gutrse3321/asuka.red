/**
 * @Author: Tomonori
 * @Date: 2020/2/26 18:48
 * @Title:
 * @Desc: ↓ ↓ ↓ ↓ ↓
 * -----
 */
import React, {FunctionComponent} from "react";

import ko from "../assets/images/ko.jpg"


const Home: FunctionComponent = () => {

  return (
      <div>
        <div className="text">会说话就多说点</div>
        <img src={ko}/>
      </div>
  )
};

export default Home;
