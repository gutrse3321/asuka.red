/**
 * @Author: Tomonori
 * @Date: 2020/3/2 16:09
 * @Title:
 * @Desc: ↓ ↓ ↓ ↓ ↓
 * -----
 */
import React from "react";
import AsukaMarked from "../../util/AsukaMark";

import "./input.styl"

interface IProps {
  isTopic: boolean
  handleClick: (title: string, content: string) => void
}

interface IState {
  title: string
  content: string
}

class Input extends React.Component<IProps, IState> {

  public state: IState;
  public props: IProps;
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
      <div className={"input-container"}>
        {
          this.props.isTopic ?
          <input
              ref={this.titleRef}
              value={this.state.title}
              onKeyPress={this.textInputKeyPress.bind(this)}
              onChange={e => this.setState({title: e.target.value})}
              type="text"
              placeholder="这里是标题"
          /> : null
        }

        <textarea
          ref={this.contentRef}
          value={this.state.content}
          onChange={e => this.setState({content: e.target.value})}
          placeholder="咧一下 ..?"
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
    if (!this.checkStateParamsExist()) {
      return false;
    }
    //TODO request
    // console.log(this.state);
    // console.log(this.marked());
    this.props.handleClick(this.state.title, this.marked());
    this.cleanState();
  }

  public textInputKeyPress(event: React.KeyboardEvent) {
    if (event.charCode === 13) {
      if (this.state.title !== "" && this.state.content === "") {
        this.contentRef.current.focus();
      }
    }
  }

  private checkStateParamsExist(param?: string): boolean {
    let form = JSON.parse(JSON.stringify(this.state));

    if (param !== undefined && param.length > 0) {
      if (form[param] !== "") {
        return true;
      }
      return false;
    }

    if (this.props.isTopic) {
      for (let key in form) {
        if (form[key].length <= 0) {
          return false;
        }
      }
    } else {
      if (form["content"].length <= 0) {
        return false;
      }
    }

    return true;
  }

  /**````
   * 清理state
   */
  private cleanState() {
    this.setState({
      title: "",
      content: ""
    })
  }

  private marked(): string {
    return AsukaMarked(this.state.content);
  }
}

export default Input;
