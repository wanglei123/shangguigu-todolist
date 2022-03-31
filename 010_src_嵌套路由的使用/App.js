/*
 * @Author       : wanglei
 * @Date         : 2022-03-27 11:59:30
 * @LastEditors  : wanglei
 * @LastEditTime : 2022-03-31 14:44:50
 * @FilePath     : /shangguigu-todolist/src/App.js
 * @description  : 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Header from './components/Header';
import MyNavLink from './components/MyNavLink';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/* 原生html中，靠<a> 跳转不同页面 */}
              {/* <a className="list-group-item active" href="./about.html">
                About
              </a>
              <a className="list-group-item" href="./home.html">
                Home
              </a> */}
              {/* react中靠路由链接实现切换组件  编写路由链接*/}
              <MyNavLink to="/about">About</MyNavLink>
              <MyNavLink to="/home">Home</MyNavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/* 注册路由 */}
                <Switch>
                {/* 用switch包一下，可以避免同名组件同时渲染，只会渲染匹配的第一个组件 */}
                  <Route  path="/about" component={About} />
                  <Route  path="/home" component={Home} />
                  {/* 放在最后，以上都没匹配到的话，会走到redirect */}
                  <Redirect to="/about" />
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
