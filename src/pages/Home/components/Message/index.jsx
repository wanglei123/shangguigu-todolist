/*
 * @Author       : wanglei
 * @Date         : 2022-03-31 14:29:53
 * @LastEditors  : wanglei
 * @LastEditTime : 2022-03-31 14:31:36
 * @FilePath     : /shangguigu-todolist/src/pages/Home/components/Message/index.jsx
 * @description  : 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Component } from 'react';

export default class Message extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <a href="/message1">message001</a>&nbsp;&nbsp;
          </li>
          <li>
            <a href="/message2">message002</a>&nbsp;&nbsp;
          </li>
          <li>
            <a href="/message/3">message003</a>&nbsp;&nbsp;
          </li>
        </ul>
      </div>
    );
  }
}
