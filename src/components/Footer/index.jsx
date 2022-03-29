/*
 * @Author       : wanglei
 * @Date         : 2022-03-27 12:09:19
 * @LastEditors  : wanglei
 * @LastEditTime : 2022-03-29 08:53:10
 * @FilePath     : /shangguigu-todolist/src/components/Footer/index.jsx
 * @description  : 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Component } from 'react';
import './index.css'

export default class Footer extends Component {
  handleCheckAllTodo = (event) => {
    this.props.checkAllOrCancel(event.target.checked)
  }
  handleClearAllDone = () => {
    this.props.clearAllDone()
  }
  render() {
    const {todos} = this.props
    const doneCount = todos.reduce((pre, todo) => pre + (todo.done ? 1 : 0), 0)
    const total = todos.length
    return (
      <div className="todo-footer">
        <label>
          {/* defaultChecked 只在第一次起作用，以后再赋值不起作用 */}
          {/* 用checked是可以改变的，但是只在最后一次生效，要写配合onChange一起用 */}
          <input type="checkbox" checked={doneCount === total && total !== 0 ? true : false} onChange={this.handleCheckAllTodo} />
        </label>
        <span>
          <span>已完成{doneCount}</span> / 全部{total}
        </span>
        <button onClick={this.handleClearAllDone} className="btn btn-danger">清除已完成任务</button>
      </div>
    );
  }
}
