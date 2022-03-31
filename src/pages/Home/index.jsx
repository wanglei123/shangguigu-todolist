/*
 * @Author       : wanglei
 * @Date         : 2022-03-30 21:01:35
 * @LastEditors  : wanglei
 * @LastEditTime : 2022-03-31 14:53:14
 * @FilePath     : /shangguigu-todolist/src/pages/Home/index.jsx
 * @description  : 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Component } from 'react';
import MyNavLink from '../../components/MyNavLink';
import { Switch, Route,Redirect } from 'react-router-dom';
import News from './components/News';
import Message from './components/Message';

export default class Home extends Component {
  render() {
    return (
      <div>
        <ul className="nav nav-tabs">
          <li>
            <MyNavLink to="/home/news">News</MyNavLink>
          </li>
          <li>
            <MyNavLink to="/home/message">Message</MyNavLink>
          </li>
        </ul>
        {/* 注册路由 */}
        <Switch>
          {/* 用switch包一下，可以避免同名组件同时渲染，只会渲染匹配的第一个组件 */}
          <Route  path="/home/news" component={News} />
          <Route  path="/home/message" component={Message} />
          <Redirect to="/home/news" />
        </Switch>
      </div>
    );
  }
}
