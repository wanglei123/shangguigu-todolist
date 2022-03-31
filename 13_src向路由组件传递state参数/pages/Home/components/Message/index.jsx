/*
 * @Author       : wanglei
 * @Date         : 2022-03-31 14:29:53
 * @LastEditors  : wanglei
 * @LastEditTime : 2022-03-31 16:51:40
 * @FilePath     : /shangguigu-todolist/src/pages/Home/components/Message/index.jsx
 * @description  : 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import Detail from './Detail';

export default class Message extends Component {
  state = {
    messageArr: [
      { id: '01', title: '消息1' },
      { id: '02', title: '消息2' },
      { id: '03', title: '消息3' },
    ],
  };
  render() {
    const { messageArr } = this.state;
    return (
      <div>
        <ul>
          {messageArr.map((messageObj) => {
            return (
              <li key={messageObj.id}>
                {/* 向路由组件传递params参数 */}
                {/* <Link to={`/home/message/detail/${messageObj.id}/${messageObj.title}`}>{messageObj.title}</Link> */}

                {/* 向路由组件传递search参数 */}
                {/* <Link
                  to={`/home/message/detail/?id=${messageObj.id}&title=${messageObj.title}`}
                >
                  {messageObj.title}
                </Link> */}

                {/* 向路由组件传递state参数 */}
                <Link
                  to={{pathname: '/home/message/detail', state: {id: messageObj.id, title: messageObj.title}}}
                >
                  {messageObj.title}
                </Link>
              </li>
            );
          })}
        </ul>
        <hr />
        {/* 声明接收params参数 */}
        {/* <Route path="/home/message/detail/:id/:title" component={Detail}></Route> */}

        {/* search参数无需声明接收，正常注册路由即可 */}
        {/* <Route path="/home/message/detail" component={Detail}></Route> */}

        {/* state参数无需声明接收，正常注册路由即可 */}
        <Route path="/home/message/detail" component={Detail}></Route>
      </div>
    );
  }
}
