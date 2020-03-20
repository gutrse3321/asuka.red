/**
 * @Author: Tomonori
 * @Date: 2020/3/20 18:30
 * @Title:
 * @Desc: ↓ ↓ ↓ ↓ ↓
 * -----
 */
import React from "react";
import {RouteComponentProps} from "react-router";

interface IParams {
  id: string
}

interface IProps extends RouteComponentProps {

}

interface IState {
}

export default class Topic extends React.Component<IState, IProps> {

  public props: IProps;

  constructor(props: IProps) {
    super(props);
    this.props = props;
  }

  componentDidMount(): void {
    console.log(this.props.match.params);
  }

  public render() {
    return (
        <div>t
        </div>
    )
  }
}
