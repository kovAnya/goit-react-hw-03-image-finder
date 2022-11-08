import React from 'react';
import * as SC from './Modal.styled';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends React.Component {
  componentDidMount() {
    window.addEventListener('keydown', this.onKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onKeyDown);
  }

  onKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <SC.Overlay onClick={this.props.onClose}>
        <SC.Modal>{this.props.children}</SC.Modal>
      </SC.Overlay>,
      modalRoot
    );
  }
}
