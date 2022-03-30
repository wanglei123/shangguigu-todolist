/*
 * @Author       : wanglei
 * @Date         : 2022-03-29 21:45:00
 * @LastEditors  : wanglei
 * @LastEditTime : 2022-03-30 10:39:50
 * @FilePath     : /shangguigu-todolist/src/components/Search/index.jsx
 * @description  : 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Component } from 'react';
import PubSub from 'pubsub-js';
import axios from 'axios';

export default class Search extends Component {
  search = async () => {
    // 获取用户输入
    const {
      keyWordElement: { value: keyWord }
    } = this;
    PubSub.publish('atguigu', { isFirst: false, isLoading: true });
    // 注释不能收起的话，要加上#region #endregion

    // #region 发网络请求 --- 使用asiox实现
    // axios.get('/api1/search/users?q=' + keyWord).then((response) => {
    //   // 请求成功，并通知List组件更新状态
    //   PubSub.publish('atguigu',{isLoading: false, users:response.data.items })
    // },(error) => {
    //   // 请求失败，并通知List组件更新状态
    //   PubSub.publish('atguigu',{isLoading: false, err:error.message })
    // #endregion })

    // 发网络请求 使用fetch发送请求 --- 未优化版
    fetch('/api1/search/users?q=' + keyWord)
      .then(
        (response) => {
          console.log('联系服务器成功', response);
          return response.json();
        },
        (error) => {
          // 这里，联系服务器失败 没有return promise, 会返回 undefined，是一个非promise,如果返回一个非promise，会被当成成功的结果继续下传，
          // 所以下一个then会输出 ：获取数据成功了 undefined
          console.log('联系服务器失败', error);
          // 返回一个初始化promise, 中断promise
          return new Promise(() => {});
        }
      )
      .then(
        (response) => {
          console.log('获取数据成功了', response);
        },
        (error) => {
          console.log('获取数据失败了', error);
        }
      );

    // 优化版一 使用fetch发送请求 ---  精简promise,用catch统一处理错误
    fetch('/api1/search/users?q=' + keyWord)
      .then((response) => {
        console.log('联系服务器成功', response);
        return response.json();
      })
      .then((response) => {
        console.log('获取数据成功了', response);
      })
      .catch((error) => {
        console.log('error', error);
      });

    // 优化版二 使用fetch发送请求 --- async await
    try {
      const response = await fetch('/api1/search/users?q=' + keyWord);
      const userData = await response.join();
      PubSub.publish('atguigu',{isLoading: false, users:userData.items })
    } catch (error) {
      PubSub.publish('atguigu',{isLoading: false, err:error.message })
      console.log('error', error);
    }
  };

  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">搜索github用户</h3>
        <div>
          <input
            ref={(c) => (this.keyWordElement = c)}
            type="text"
            placeholder="输入关键词进行搜索"
          />
          &nbsp;<button onClick={this.search}>搜索</button>
        </div>
      </section>
    );
  }
}
