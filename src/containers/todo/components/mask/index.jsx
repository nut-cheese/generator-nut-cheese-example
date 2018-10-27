import React, { Component } from 'react';

import style from './index.scss';

class InputMask extends Component {
  _input = null;
  constructor(props, context) {
    super(props, context);
  }
  
  componentDidMount() {
    this._input.focus();
  }

  handleEnter = (e) => {
    if (e.key === 'Enter') {
      this.handleSaveNewTodoItem();
    }
  }
  
  handleSaveNewTodoItem = () => {
    this.props.saveCallback(this._input.value);
  }

  render() {
    return (
      <div className={style['input-mask']}>
        <input
          type="text"
          placeholder="What you want to do?"
          onKeyDown={this.handleEnter}
          ref={input => this._input = input} />
      </div>
    );
  }

}

export default InputMask;
