import PropTypes from 'prop-types';
import React, { Component } from 'react';

import style from './index.scss';

class Checkbox extends Component {
  constructor(props, context) {
    super(props, context);
  }
  
  handleClick = () => {
    this.props.onchange(!this.props.checked);
  }

  render() {
    const { checked } = this.props; 
    return (
      <div className={`${style['checkbox']} ${checked ? style['checked'] : ''}`} onClick={this.handleClick}>
        {checked ? 
          <span><img src="/images/yes.svg" style={{ width: '100%' }} /></span>
          : null}
      </div>
    );
  }
}

Checkbox.PropTypes = {
  checked: PropTypes.bool,
  onchange: PropTypes.func,
};

export default Checkbox;