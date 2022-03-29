/*
 * @Author       : wanglei
 * @Date         : 2022-03-29 21:45:00
 * @LastEditors  : wanglei
 * @LastEditTime : 2022-03-29 23:22:45
 * @FilePath     : /shangguigu-todolist/src/components/Search/index.jsx
 * @description  : 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Component } from 'react'
import axios from 'axios'

export default class Search extends Component {
  search = () => {
    const {keyWordElement: {value: keyWord}} = this
    // 发网络请求
    this.props.updateState({isFirst: false, isLoading: true})
    axios.get('http://localhost:3000/api1/search/users?q=' + keyWord).then((response) => {
      this.props.updateState({isLoading: false, users:response.data.items })
    },(error) => {
      this.props.updateState({isLoading: false, err:error.message })
    })
  }

  render() {
    return (
      <section className="jumbotron">
          <h3 className="jumbotron-heading">搜索github用户</h3>
          <div>
            <input ref={c => this.keyWordElement = c} type="text" placeholder="输入关键词进行搜索" />
            &nbsp;<button onClick={this.search}>搜索</button>
          </div>
        </section>
    )
  }
}
