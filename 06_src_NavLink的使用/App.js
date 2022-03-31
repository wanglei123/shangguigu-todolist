/*
 * @Author       : wanglei
 * @Date         : 2022-03-27 11:59:30
 * @LastEditors  : wanglei
 * @LastEditTime : 2022-03-31 09:39:11
 * @FilePath     : /shangguigu-todolist/06_src_NavLink的使用/App.js
 * @description  : 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Header from './components/Header'

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
              
              <NavLink activeClassName='atguigu' className="list-group-item" to="/home">
                About
              </NavLink>
              <NavLink activeClassName='atguigu' className="list-group-item" to="/about">
                Home
              </NavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/* 注册路由 */}
                <Route path="/about" component={About} />
                <Route path="/home" component={Home} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
