import React, { Component } from 'react';
import moment from 'moment';

import { randomStr } from 'Util';

import DailyTodoBlock from './components/daily';
import InputMask from './components/mask';

import style from './index.scss';

class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addVisible: false,
      data: [{
        id: 1,
        date: `${moment('2017-01-23').format('dddd Do MMMM')}`,
        completed: false,
        list: [{
          id: 1,
          desc: 'Buy Die Antwoord Ticket',
          completed: false,
        }, {
          id: 2,
          desc: 'Buy gift for Mom',
          completed: false,
        }],
      }],
    };
  }
  
  toogleCompletedAll = (id) => {
    const { data } = this.state;
    const tempData = data.concat([]);

    this.setState({
      data: tempData.map(item => {
        if (item.id === id) {
          if (item.completed) {
            item.completed = false;
            item.list = item.list.map(obj => {
              obj.completed = false;
              return obj;
            });
          } else {
            item.completed = true;
            item.list = item.list.map(obj => {
              obj.completed = true;
              return obj;
            });
          }
        }
        return item;
      })
    });
  }

  handleEdit = (parentId, childId, msg) => {
    const { data } = this.state;
    const tempData = data.concat([]);
    console.log(childId, msg);
    let newData = [];
    if (msg.operator === 'delete') {
      this.setState({
        data: tempData.map(item => {
          if (item.id === parentId) {
            item.list = item.list.filter(obj => obj.id !== childId);
          }
          return item;
        }),
      });
    } else {
      this.setState({
        data: tempData.map(item => {
          if (item.id === parentId) {
            item.list = item.list.map(obj => {
              if (obj.id === childId) {
                switch (msg.operator) {
                case 'edit':
                  obj.desc = msg.value;
                  break;
                case 'toogle':
                  obj.completed = msg.value;
                  break;
                case 'delete':
                }
              }
              return obj;
            });
            if (msg.operator === 'toogle' && item.list.every(i => i.completed)) {
              item.completed = true;
            } else {
              item.completed = false;
            }
          }
          return item;
        })
      });
    }
  }

  createNewTodoItem = () => {
    this.setState({
      addVisible: !this.state.addVisible
    });
  }

  handleCreateNewTodo = (text) => {
    const date = moment(new Date()).format('dddd Do MMMM');
    const { addVisible, data } = this.state;
    const tempData = data.concat([]);
    const currentDayIndex = tempData.findIndex(item => item.date === date);
    if(text === '') return;
    if (currentDayIndex !== -1) {
      tempData[currentDayIndex].list.push({
        id: randomStr(),
        desc: text,
        completed: false,
      });
    } else {
      tempData.push({
        date,
        list: [{
          id: randomStr(),
          desc: text,
          completed: false,
        }],
      });
    }
    this.setState({
      addVisible: false,
      data: tempData,
    });
  }

  render() {
    const { data, addVisible } = this.state;
    return (
      <div className={style['todo-container']}>
        {addVisible ? 
          <InputMask
            visible={addVisible}
            saveCallback={this.handleCreateNewTodo}
          />
          :null}
        <div className={style['header']}>
          <h3 className={style['title']}>To Do List</h3>
          <div className={style['desc-bar']}>
            <h6>Demo project. Enjoy yourself!</h6>
            <div className={style['add-btn']} onClick={this.createNewTodoItem}>+</div>
          </div>
        </div>
        <div className={style['items-wrapper']}>
          {data.map((item, index) => {
            return <DailyTodoBlock
              key={index}
              {...item}
              toogleCompletedAll={this.toogleCompletedAll}
              handleEdit={this.handleEdit} />;
          })}
        </div>   
      </div>
    );
  }
}

export default TodoApp;