/*
 * @Author       : wanglei
 * @Date         : 2022-03-27 11:59:30
 * @LastEditors  : wanglei
 * @LastEditTime : 2022-03-30 09:15:39
 * @FilePath     : /shangguigu-todolist/src/App.js
 * @description  : 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Component } from 'react';
import Search from './components/Search';
import List from './components/List';

export default class App extends Component {
  
  render() {
    return (
      <div className="container">
        <Search />
        <List/>
      </div>
    );
  }
}
