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
        <div className="banner-container">
          <span className="banner-title">公告</span>
          <div className="banner-content" dangerouslySetInnerHTML={this.marked()}>
          </div>
        </div>
    )
  }

  componentDidMount(): void {
  }

  private marked() {
    return {__html: AsukaMarked(`
- 遠征大成功
- 武罡寺聖僧`)}
  }
}

export default Banner;

