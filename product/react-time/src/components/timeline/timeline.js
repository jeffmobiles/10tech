import React from 'react';

import styles from './time.css';

export default class TimeLine extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (

      <div className="time-line">
        <div class="add-event">添加一条</div>
        <div class="list">
          <ul class="events">
            <li class="item">
                <div class="left"></div>
                <div class="node"></div>
                <div class="right"></div>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}