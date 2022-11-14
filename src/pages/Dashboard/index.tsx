import React, { Component } from 'react';
import { Button } from 'antd';
export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Button type="primary">Index</Button>
      </div>
    );
  }
}
