import React from 'react';
import styles from './saas.css';

export default class Icon extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const { code } = this.props;
    return (
      <i className="icons">{ code } </i>
    );
  }
}