import * as React from 'react';

import { Empty } from 'antd';

interface BaseProps {}
interface BaseState {}

export default class extends React.Component<BaseProps, BaseState> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="ui-p-30">
        <Empty description="敬请期待！" />
      </div>
    );
  }
}
