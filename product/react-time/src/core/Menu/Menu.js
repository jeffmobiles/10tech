import React from 'react';
import styles from './Menu.less';
import Icon from './../Icon';

export default class Menu extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="appbar">
        <div className="left">
          <Icon code="menu"/>
          <Icon code="search"/>
        </div>

        <div className="middle">
          <div class="title">
            demo日志
          </div>
        </div>

        <div className="right">
          <Icon code="home"/>
        </div>
      </div>
    );
  }
}