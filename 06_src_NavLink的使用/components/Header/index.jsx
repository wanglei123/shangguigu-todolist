/*
 * @Author       : wanglei
 * @Date         : 2022-03-31 08:53:33
 * @LastEditors  : wanglei
 * @LastEditTime : 2022-03-31 08:53:33
 * @FilePath     : /shangguigu-todolist/src/components/Header/index.jsx
 * @description  : 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-xs-offset-2 col-xs-8">
          <div className="page-header">
            <h2>React Router Demo</h2>
          </div>
        </div>
      </div>
    );
  }
}
