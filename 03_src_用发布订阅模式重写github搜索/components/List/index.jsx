/*
 * @Author       : wanglei
 * @Date         : 2022-03-29 21:44:46
 * @LastEditors  : wanglei
 * @LastEditTime : 2022-03-30 09:26:54
 * @FilePath     : /shangguigu-todolist/src/components/List/index.jsx
 * @description  : 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Component } from 'react';
import PubSub from 'pubsub-js'
import './index.css';

export default class List extends Component {
  
  state = { users: [], isFirst: true, isLoading: false, err: '' };

  componentDidMount(){
    // 可以用_, 来代表第一个参数不用传
    this.token = PubSub.subscribe('atguigu', (_,stateObj) => {
      this.setState(stateObj)
    });
  }
  componentWillUnmount(){
    PubSub.unsubscribe(this.token);
  }

  render() {
    const { users, isFirst, isLoading, err } = this.state;
    return (
      <div className="row">
        {isFirst ? (
          <h2>欢迎来到github查询系统</h2>
        ) : isLoading ? (
          <h2>Loaidng.....</h2>
        ) : err ? (
          <h2 style={{ color: 'red' }}>{err}</h2>
        ) : users.length === 0 ? (
          <h2>查询失败，无数据</h2>
        ) : (
          users.map((user) => {
            return (
              <div className="card" key={user.id}>
                <a href={user.html_url} target="_blank" rel="noreferrer">
                  <img
                    src={user.avatar_url}
                    style={{ width: '100px' }}
                    alt="head"
                  />
                </a>
                <p className="card-text">{user.login}</p>
              </div>
            );
          })
        )}
      </div>
    );
  }
}
