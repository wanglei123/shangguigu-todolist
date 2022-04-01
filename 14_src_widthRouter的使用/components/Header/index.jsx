/*
 * @Author       : wanglei
 * @Date         : 2022-03-31 08:53:33
 * @LastEditors  : wanglei
 * @LastEditTime : 2022-03-31 21:25:25
 * @FilePath     : /shangguigu-todolist/src/components/Header/index.jsx
 * @description  : 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

 class Header extends Component {
  back = () => {
    this.props.history.goBack()
  }

  forward = () => {
    this.props.history.goForward()
  }
  render() {
    return (
      <div className="row">
        <div className="col-xs-offset-2 col-xs-8">
          <div className="page-header">
            <h2>React Router Demo</h2>
          </div>
          <button onClick={this.back}>回退</button>
          <button onClick={this.forward}>前进</button>
        </div>
      </div>
    );
  }
}

export default withRouter(Header)
