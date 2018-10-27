import * as React from 'react';

import { Link } from 'react-router';

import style from './index.scss';

class RootContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { pathname } = this.props.location;
    return (
      <div className="wrapper-page">
        {pathname.indexOf('/todo') === -1 ? 
          <div style={{ textAlign: 'center' }}>
            <Link to="/todo"><span className={style['redirect-btn']}>CLICK TO HAVE FUN</span></Link>
          </div>
          :null}
        {this.props.children}
        <p className={style['designed-by']}>Designed by <a href="https://dribbble.com/shots/3464129-Daily-UI-042-ToDo-List">@Anaïs Migeon</a></p>
      </div>
    );
  }
}

export default RootContainer;
