/**
 * @Author: Tomonori
 * @Date: 2020/3/2 16:09
 * @Title:
 * @Desc: ↓ ↓ ↓ ↓ ↓
 * -----
 */
import React, {LegacyRef} from "react";
import AsukaMarked from "../../util/AsukaMark";

import "./input.styl"

interface IProps {
}

interface IState {
  title: string
  content: string
}

class Banner extends React.Component<IProps, IState> {

  public state: IState;
  private readonly titleRef: React.RefObject<HTMLInputElement>;
  private readonly contentRef: React.RefObject<HTMLTextAreaElement>;

  constructor(props: IProps) {
    super(props);
    this.state = {
      title: "",
      content: "",
    };
    this.titleRef = React.createRef();
    this.contentRef = React.createRef();
  }

  render() {
    return (
        <div className="input-container">
          <input
              ref={this.titleRef}
              value={this.state.title}
              onKeyPress={this.textInputKeyPress.bind(this)}
              onChange={e => this.setState({title: e.target.value})}
              type="text"
              placeholder="这里是标题"
          />
          <textarea
              ref={this.contentRef}
              value={this.state.content}
              onChange={e => this.setState({content: e.target.value})}
              placeholder="列点什么 ..?"
              suppressContentEditableWarning
          ></textarea>
          <div onClick={this.submit.bind(this)} className="submit">
            送信
          </div>
        </div>
    )
  }

  componentDidMount(): void {
  }

  public submit() {
    //TODO request
    console.log(this.state);
  }

  public textInputKeyPress(event: React.KeyboardEvent) {
    console.log(this.checkStateParams());
    console.log(event.charCode)
    if (event.charCode === 13) {
      if (this.state.title !== "" && this.state.content === "") {
        this.contentRef.current.focus();
      }
    }
  }

  private checkStateParams(param?: string): boolean {
    let form = JSON.parse(JSON.stringify(this.state));

    for (let key in form) {
      console.log(key);
    }

    return false;
  }

  private marked() {
    return {__html: AsukaMarked(`# 公告
<br> - 大成功`)}
  }
}

export default Banner;
