import React from "react";
import AsukaMarked from "../../util/AsukaMark";

import "./banner.styl"

/**
 * @Author: Tomonori
 * @Date: 2020/3/2 14:57
 * @Title:
 * @Desc: ↓ ↓ ↓ ↓ ↓
 * -----
 */
interface IProps {
}

interface IState {
}

class Banner extends React.Component<IProps, IState> {

  public state: IState;

  constructor(props: IProps) {
    super(props);
    // this.state = {
    // };
  }

  render() {
    return (
        <div className="banner-container" dangerouslySetInnerHTML={this.marked()}>
        </div>
    )
  }

  componentDidMount(): void {
  }

  private marked() {
    return {__html: AsukaMarked(`# 公告
<br> - 大成功`)}
  }
}

export default Banner;

