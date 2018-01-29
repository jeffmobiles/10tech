import React from 'react'

import styles from './time.less'
// import { classNameNames } from 'classNamenames'
// import p1 from './1.jpg'
// import p2 from './2.jpg'
// import p3 from './3.jpg'
// import p4 from './4.jpg'

import TimeLineItem from './lineItem'

import Menu from './../../core/Menu'
import { Tabs, WhiteSpace, Badge } from 'antd-mobile'

export default class TimeLine extends React.Component {

  constructor (props) {
    super(props)
  }

  render () {
    const tabs2 = [
      { title: 'First Tab', sub: '1' },
      { title: 'Second Tab', sub: '2' },
      { title: 'Third Tab', sub: '3' }
    ]
    return (
      // <img src={p1}></img>
      <div className='time-wrapper'>
        <Menu/>
        <div className='add-more'>
          <button className='btn btn-add'>
            添加一条
          </button>
        </div>
        <Tabs
          tabs={tabs2}
          initialPage={1}
          tabBarPosition='bottom'
          renderTab={tab => <span>{tab.title}</span>}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
            <div className='wrapper'>
              <ul className='list'>
                <TimeLineItem/>
                <TimeLineItem/>
                <TimeLineItem/>
                <TimeLineItem/>
                <TimeLineItem/>
                <TimeLineItem/>
                <TimeLineItem/>
                <TimeLineItem/>
                <TimeLineItem/>
                <TimeLineItem/>
              </ul>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
            Content of second tab
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
            Content of third tab
          </div>
        </Tabs>
      </div>
    )
  }
}
