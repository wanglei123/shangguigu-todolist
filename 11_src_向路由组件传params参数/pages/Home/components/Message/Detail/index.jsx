/*
 * @Author       : wanglei
 * @Date         : 2022-03-31 15:04:17
 * @LastEditors  : wanglei
 * @LastEditTime : 2022-03-31 15:26:18
 * @FilePath     : /shangguigu-todolist/src/pages/Home/components/Message/Detail/index.jsx
 * @description  : 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Component } from 'react';

const data = [
  { id: '01', content: '你好，中国' },
  { id: '02', content: '你好，尚硅谷' },
  { id: '03', content: '你好，未来的自己' },
];

export default class MessageDetail extends Component {
  render() {
    const {id,title} = this.props.match.params
    const findRes = data.find(detailObj => {
      return detailObj.id === id
    })
    return (
      <div>
        <ul>
          <li>ID: {id}</li>
          <li>title: {title}</li>
          <li>content: {findRes.content}</li>
        </ul>
      </div>
    );
  }
}
