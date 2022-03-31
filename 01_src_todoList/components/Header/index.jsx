/*
 * @Author       : wanglei
 * @Date         : 2022-03-27 12:09:05
 * @LastEditors  : wanglei
 * @LastEditTime : 2022-03-28 15:08:12
 * @FilePath     : /shangguigu-todolist/src/components/Header/index.jsx
 * @description  : 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types'
import {nanoid} from 'nanoid'
import './index.css';

export default class Header extends Component {

  static propTypes = {
    addTodo: PropTypes.func.isRequired
  }

  handleKeyUp = (event) => {
    const { keyCode, target } = event;
    // 判断当前键盘哪个键被按下 keyCode === 13 回车键
    if (keyCode !== 13) {
      return;
    }
    // 添加的todo名字不能为空
    if (target.value.trim() === ''){
      alert('输入不能为空')
      return
    }
    const todoObj = {id: nanoid(), name: target.value, done: false}
    this.props.addTodo(todoObj)
    target.value = '';
  };
  render() {
    return (
      <div className="todo-header">
        <input
          type="text"
          onKeyUp={this.handleKeyUp}
          placeholder="请输入你的任务名称，按回车键确认"
        />
      </div>
    );
  }
}
