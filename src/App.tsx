/**
 * @Author: Tomonori
 * @Date: 2020/2/26 16:54
 * @Title:
 * @Desc: ↓ ↓ ↓ ↓ ↓
 * -----
 */
import * as React from "react";
import ko from "./assets/images/ko.jpg"

interface IPropTypes {
}

interface IStateTypes {
}

export default class App extends React.Component<IPropTypes, IStateTypes> {

  public render() {
    return (
        <div>
          <div className="text">会说话就多说点</div>
          <img src={ko}/>
        </div>
    );
  }
}
