import React from "react";
import AsukaMarked from "../../util/AsukaMark";

import "./panel.styl";

/**
 * @Author: Tomonori
 * @Date: 2020/3/20 16:02
 * @Title:
 * @Desc: ↓ ↓ ↓ ↓ ↓
 * -----
 */

interface IProps {
}

interface IState {
}

class Panel extends React.Component<IProps, IState> {

  public state: IState;

  constructor(props: IProps) {
    super(props);
    // this.state = {
    // };
  }

  render() {
    return (
        <div className="panel-container">
          <div className="panel-title">“会说话就多说点”</div>
          {/*<img src={ko}/>*/}
        </div>
    )
  }

  componentDidMount(): void {
  }

}

export default Panel;
