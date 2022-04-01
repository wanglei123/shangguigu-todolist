/*
 * @Author       : wanglei
 * @Date         : 2022-03-31 15:04:17
 * @LastEditors  : wanglei
 * @LastEditTime : 2022-03-31 20:54:36
 * @FilePath     : /shangguigu-todolist/src/pages/Home/components/Message/Detail/index.jsx
 * @description  : 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Component } from 'react';

// urlencoded编码形式： key=value&key=value

const data = [
  { id: '01', content: '你好，中国' },
  { id: '02', content: '你好，尚硅谷' },
  { id: '03', content: '你好，未来的自己' },
];

export default class MessageDetail extends Component {
  render() {
    console.log(this.props);
    // 接收params参数
    const {id,title} = this.props.match.params

    // 接收search参数
    // const { search } = this.props.location;
    // 最新的react废弃了querystring,要使用 new URLSearchParams，再用get()取到相应的值 <li>ID: {res.get('id')}</li>
    // const res = new URLSearchParams(search.slice(1));

    // 接收state参数，清空浏览器缓存后，state为undefined,
    // const {id, title} = this.props.location.state || {}

    const findRes = data.find((detailObj) => {
      return detailObj.id === id
    }) || {}
    return (
      <div>
        <ul>
          <li>ID: {id} </li>
          <li>title: {title}</li>
          <li>content: {findRes.content}</li>
        </ul>
      </div>
    );
  }
}
