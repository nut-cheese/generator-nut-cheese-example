import React, { Component } from 'react';
import Checkbox from 'Components/Checkbox';

import style from './index.scss';

class TodoItem extends Component {
  _input = null;
  constructor(props, context) {
    super(props, context);
    this.state = {
      id: 0,
      desc: '',
      completed: false,
      editing: false,
    };
  }

  componentDidMount() {
    this.setState({ ...this.props });
  }
  

  toogleCompleted = (completed) => {
    this.props.handleEdit ? this.props.handleEdit(this.props.id, { operator: 'toogle', value: completed }) : null;
  }

  toogleEditing = () => {
    if (!this.state.editing && !this.state.completed) {
      this.setState({ editing: !this.state.editing }, () => {
        if (this.state.editing) {
          this._input.focus();
        }
      });
    }
  }

  handleEdit = () => {
    this.props.handleEdit ? this.props.handleEdit(this.props.id, { operator: 'edit', value: this._input.value } ) : null;
  }

  handleDeleteItem = () => {
    this.props.handleEdit ? this.props.handleEdit(this.props.id, { operator: 'delete', value: true } ) : null;
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ ...nextProps });
  }
  
  handleBlur = () => {
    this.setState({ editing: false });
    this.props.handleEdit();
  }

  handleEnter = (e) => {
    if (e.key === 'Enter') {
      this.setState({ editing: false });
      this.handleEdit();
    }
  }


  render() {
    const { editing } = this.state;
    const { desc, completed } = this.props;
    return (
      <div className={`${style['todo-item']} ${completed ? style['completed']: ''}`}>
        <div className={style['wrapper']}>
          <div className={style['left']}>
            <Checkbox checked={completed} onchange={this.toogleCompleted} />
            <div className={style['todo-text-wrapper']}>
              {editing ? 
                <input
                  className={style['todo-input']}
                  type="text"
                  placeholder="What you want to do?"
                  onBlur={this.handleBlur}
                  onKeyDown={this.handleEnter}
                  ref={input => this._input = input}
                  defaultValue={this.props.desc}
                />
                :<p className={style['todo-desc']} onClick={this.toogleEditing}>{desc}</p>}
            </div>
          </div>
          <div className={style['right']}>
            <i className={`iconfont icon-edit ${style['btn']}`} onClick={this.toogleEditing}></i>
            <i className={`iconfont icon-delete ${style['btn']}`} onClick={this.handleDeleteItem}></i>
          </div>
        </div>
      </div>
    );
  }
}

export default TodoItem;