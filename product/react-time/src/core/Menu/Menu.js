import React from 'react';
import styles from './Menu.less';
import Icon from './../Icon';

export default class Menu extends React.Component {
  constructor(props){
    super(props);
    this.props.clickClass = "";
  }

  click() {
    this.props.clickClass = "ani";
  }

  render() {
    const { clickClass } = this.props;
    return (
      <div className="appbar">
        <div className="left">
          <Icon code="menu" onClick= "click" className={clickClass}/>
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