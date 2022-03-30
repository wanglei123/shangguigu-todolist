/*
 * @Author       : wanglei
 * @Date         : 2022-03-29 21:45:00
 * @LastEditors  : wanglei
 * @LastEditTime : 2022-03-30 09:24:30
 * @FilePath     : /shangguigu-todolist/src/components/Search/index.jsx
 * @description  : 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import axios from 'axios'


export default class Search extends Component {

  search = () => {
    
    // 获取用户输入
    const {keyWordElement: {value: keyWord}} = this
    PubSub.publish('atguigu',{isFirst: false, isLoading: true})
    // 发网络请求
    axios.get('http://localhost:3000/api1/search/users?q=' + keyWord).then((response) => {
      // 请求成功，并通知List组件更新状态
      PubSub.publish('atguigu',{isLoading: false, users:response.data.items })
    },(error) => {
      // 请求失败，并通知List组件更新状态
      PubSub.publish('atguigu',{isLoading: false, err:error.message })
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
