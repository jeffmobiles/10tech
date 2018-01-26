import React from 'react';

import styles from  './time.less';
// import { classNameNames } from 'classNamenames';
// import p1 from './1.jpg';
// import p2 from './2.jpg';
// import p3 from './3.jpg';
// import p4 from './4.jpg';

export default class TimeLineItem extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      // <img src={p1}></img>
            <li className="item">
                <div className="left">
                  <div className="time">
                  2018-01-26
                  </div>
                </div>
                <div className="center ">
                  <div className="node">1
                  </div>
                  </div>
                <div className="right content">
                  <div className="title">年报预约披露</div>
                  <div className="desc">东方航空将于明日进行功权分配</div>
                </div>
            </li>
    )
  }
}