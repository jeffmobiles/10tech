import React, { Component } from 'react';
import TimeLine from './../timeline/timeline';


export default class TimePage extends Component {

  render() {
    return (
      <div>
        <span>时间轴的页面</span>
        <TimeLine/>
      </div>
    )
  }
}
