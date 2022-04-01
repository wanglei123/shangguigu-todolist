/*
 * @Author       : wanglei
 * @Date         : 2022-03-31 09:38:34
 * @LastEditors  : wanglei
 * @LastEditTime : 2022-03-31 09:54:06
 * @FilePath     : /shangguigu-todolist/src/components/MyNavLink/index.jsx
 * @description  : 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class MyNavLink extends Component {
  render() {
    return (
      <NavLink
        activeClassName="atguigu"
        className="list-group-item"
        {...this.props}
      />
    );
  }
}
