import React from "react";

import "./panel.styl";
import {TopicModel} from "../../model/TopicModel";
import {getTime} from "../../util/tools";
import {RouteComponentProps, withRouter} from "react-router";

/**
 * @Author: Tomonori
 * @Date: 2020/3/20 16:02
 * @Title:
 * @Desc: ↓ ↓ ↓ ↓ ↓
 * -----
 */

interface IProps extends RouteComponentProps {
  list: Array<TopicModel>
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
        <div className={"panel-container"}>
          <div className={"panel-title"}>“会说话就多说点”</div>
          <ul className={"panel-list"}>
            {
              this.props.list.map((item, index) => {
                return (
                    <li key={index}>
                      { getTime(item.createTime) }&nbsp;-&nbsp;
                      {/*<Link to={`/topic/${item.id}`}>*/}
                        <span onClick={() => this.props.history.push(`/topic/${item.id}`)}>{ item.title }</span>
                      {/*</Link>*/}
                    </li>
                )
              })
            }
          </ul>
        </div>
    )
  }

  componentDidMount(): void {
  }

}

export default withRouter(Panel);
