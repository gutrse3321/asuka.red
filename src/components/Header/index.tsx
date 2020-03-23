/**
 * @Author: Tomonori
 * @Date: 2020/2/27 16:46
 * @Title:
 * @Desc: ↓ ↓ ↓ ↓ ↓
 * -----
 */
import React from "react";

import logoImg from "../../assets/images/logo@128x128.webp";
import "./header.styl";
import {dateFormat} from "../../util/tools";

interface IProps {

}

interface IState {
  dateTime: string
}

class Header extends React.Component<IProps, IState> {

  public state: IState;

  constructor(props: IProps) {
    super(props);
    this.state = {
      dateTime: ""
    };
  }

  render() {
    return (
        <div className={"header"}>
          <div className={"header-left"}>
            <img src={logoImg}/>
            <span>明日香.Red</span>
          </div>
          <div className={"header-right"}>
            <span>{this.state.dateTime}</span>
          </div>
        </div>
    )
  }

  componentDidMount(): void {
    this.setDateInterval();
  }

  private setDateInterval(): void {
    window.setInterval(() => {
      this.setState({
        dateTime: dateFormat(new Date().valueOf(), "hh:mm:ss yyyy-MM-dd")
      });
    }, 1000);
  }
}

export default Header;
