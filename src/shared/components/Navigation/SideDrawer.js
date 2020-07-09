
import React from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';

import './SideDrawer.css';

const SideDrawer = props => {

  const content = 
  <CSSTransition in={props.show} timeout={400} classNames="slide-in-right" mountOnEnter unmountOnExit >
    <aside className="side-drawer" onClick={props.onClick} >{props.children}</aside>
  </CSSTransition>;

  return ReactDOM.createPortal(content, document.getElementById('portal'));
};




export default SideDrawer;