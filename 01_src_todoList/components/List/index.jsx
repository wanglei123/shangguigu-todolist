/*
 * @Author       : wanglei
 * @Date         : 2022-03-27 12:21:11
 * @LastEditors  : wanglei
 * @LastEditTime : 2022-03-28 16:04:10
 * @FilePath     : /shangguigu-todolist/src/components/List/index.jsx
 * @description  : 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Item from '../Item';
import './index.css';

export default class List extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
    updateTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
  };
  render() {
    const { todos, updateTodo, deleteTodo } = this.props;
    return (
      <ul className="todo-main">
        {   todos.map((todo) => {
          return (
            <Item
              key={todo.id}
              {...todo}
              updateTodo={updateTodo}
              deleteTodo={deleteTodo}
            />
          );
        })}
      </ul>
    );
  }
}
