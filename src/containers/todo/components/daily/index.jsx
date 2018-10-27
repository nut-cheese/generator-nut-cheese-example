import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TodoItem from './component/item';

import style from './index.scss';

class DailyTodoBlock extends Component {
  constructor(props, context) {
    super(props, context);
  }

  toogleCompletedAll = () => {
    console.log('object');
    this.props.toogleCompletedAll(this.props.id);
  }

  handleEdit = (id, msg) => {
    console.log(id, msg);
    this.props.handleEdit(this.props.id, id, msg);
  }

  render() {
    return (
      <div className={style['daily-block']}>
        <p
          className={`${style['daily-date']} ${this.props.completed ? style['completed']: ''}`}
          onClick={this.toogleCompletedAll.bind(this)}
        >{this.props.date}</p>
        <div className={style['todo-item-wrapper']}>
          {this.props.list.map((item, index) => {
            return <TodoItem key={`${item.desc}-${index}}`} {...item} handleEdit={this.handleEdit} />;
          })}
        </div>
      </div>
    );
  }
}

DailyTodoBlock.PropTypes = {
  date: PropTypes.string,
  list: PropTypes.array,
};

export default DailyTodoBlock;