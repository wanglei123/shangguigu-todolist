/*
 * @Author       : wanglei
 * @Date         : 2022-03-27 12:24:13
 * @LastEditors  : wanglei
 * @LastEditTime : 2022-03-28 17:09:46
 * @FilePath     : /shangguigu-todolist/src/components/Item/index.jsx
 * @description  : 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {

  // 鼠标是否进入当前行
  state = {mouse: false}

  handleMouse = (flag) => {
    return () => {
      this.setState({mouse: flag})
    }
  }
  // 勾选或者取消勾选某一个todo
  handleCheck = (id) => {
    return (event) => {
      this.props.updateTodo(id,event.target.checked)
    }
  }

  handleDelete = (id) => {
    this.props.deleteTodo(id)
  }
  
  render() {
    const {id, name,done} = this.props
    const {mouse} = this.state
    return (
      <li style={{backgroundColor: mouse ? '#ddd': 'white'}} onMouseLeave={this.handleMouse(false)} onMouseEnter={this.handleMouse(true)}>
      <label>
        <input type="checkbox" checked={done} onChange={this.handleCheck(id)} />
        <span>{name}</span>
      </label>
      <button onClick={() => this.handleDelete(id)} className="btn btn-danger" style={{ display: mouse ? 'block' : 'none' }}>
        删除
      </button>
    </li>
    )
  }
}
