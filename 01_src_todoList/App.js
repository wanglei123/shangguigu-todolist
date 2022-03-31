/*
 * @Author       : wanglei
 * @Date         : 2022-03-27 11:59:30
 * @LastEditors  : wanglei
 * @LastEditTime : 2022-03-29 08:52:37
 * @FilePath     : /shangguigu-todolist/src/App.js
 * @description  : 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import React, { Component } from 'react';
import Header from './components/Header';
import List from './components/List';
import Footer from './components/Footer';
import './App.css';

export default class App extends Component {
  // 初始化状态
  state = {
    todos: [
      { id: '001', name: '吃饭', done: true },
      { id: '002', name: '睡觉', done: true },
      { id: '003', name: '打代码', done: false },
      { id: '004', name: '学习react', done: false },
    ],
  };
  addTodo = (todoObj) => {
    const {todos} = this.state
    const newTodos = [todoObj, ...todos]
    this.setState({todos: newTodos})
  }
  // 用于更新todo
  updateTodo = (id, done) => {
    const {todos} = this.state
    const newTodos = todos.map(todoObj => {
      if (todoObj.id === id) {
        return {...todoObj, done}
      } else {
        return todoObj
      }
    })
    this.setState({todos: newTodos})
  }
  deleteTodo = (id) => {
    const {todos} = this.state
    const newTodos = todos.filter(todoObj => {
      return todoObj.id !== id
    })
    this.setState({todos: newTodos})
  }

  checkAllOrCancel = (flag) => {
    const {todos} = this.state
    const newTodos = todos.map(todo => {
      return {...todo, done: flag}
    })
    this.setState({todos: newTodos})
  }
  clearAllDone = () => {
    const {todos} = this.state
    const newTodos = todos.filter((todoObj) => {
      return !todoObj.done
    })
    this.setState({todos: newTodos})
  }
  render() {
    const { todos } = this.state;
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo}/>
          <List todos={todos} updateTodo={this.updateTodo}  deleteTodo={this.deleteTodo}/>
          <Footer todos={todos} checkAllOrCancel={this.checkAllOrCancel} clearAllDone={this.clearAllDone}/>
        </div>
      </div>
    );
  }
}
