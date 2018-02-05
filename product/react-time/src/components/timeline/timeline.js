import React from 'react'

import styles from './time.less'
// import { classNameNames } from 'classNamenames'
// import p1 from './1.jpg'
// import p2 from './2.jpg'
// import p3 from './3.jpg'
// import p4 from './4.jpg'

import TimeLineItem from './lineItem'
import QueueAnim from 'rc-queue-anim';
// import Menu from './../../core/Menu'
import { SwipeAction, List,Modal, Button, Tabs, WhiteSpace, Badge } from 'antd-mobile'

export default class TimeLine extends React.Component {

  state = {
    list: [1,2,3,4,5,6,7,8],
    visible: false,

  }
  constructor (props) {
    super(props);
    this.state = {
      list: [1,2,3,4,5,6,7,8],
    visible: false,
    }
  }

  addOne = () => {
    console.log('addOne');
    let list = this.state.list;
    let head = [++list.length];
    list = head.concat(list);
    this.setState({
      visible: true
    })
    // this.setState({
    //   list: list
    // })

  }

  handleOk = () => {
  }

  handleCancel = () => {

  }

  render () {
    return (
      <div className='time-wrapper'>
        <div className='add-more'>
          <Button type="primary" className='btn btn-add' onClick={this.addOne}>
            添加一条
          </Button>
        </div> 
        
        <div className='wrapper'>
              <ul className='list'>

              <List>
              <QueueAnim delay={300} className="queue-simple">

                  {
                    this.state.list.map((item,index) => {
                      return (
                        <SwipeAction  autoClose key={index} right={[
                          {
                            text: 'Cancel',
                            onPress: () => console.log('cancel'),
                            style: { backgroundColor: '#ddd', color: 'white' },
                          }
                        ]}
                        left={[
                          {
                            text: 'Reply',
                            onPress: () => console.log('reply'),
                            style: { backgroundColor: '#108ee9', color: 'white' },
                          }
                        ]}
                        onOpen={() => console.log('global open')}
                        onClose={() => console.log('global close')}
                        >
                          <List.Item>
                            <TimeLineItem key={index}/>
                          </List.Item>
                        </SwipeAction>
                      )
                    })
                  }
              </QueueAnim>
              </List>
              </ul>
          </div>
        
          <Modal
          title="添加日志"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
      </div>


    )
  }
}
