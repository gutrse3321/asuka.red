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

export default class Header extends React.Component<{}, {}> {

  render() {
    return (
        <div className="header">
          <img src={logoImg}/>
          <span>明日香.Red</span>
        </div>
    )
  }
}
