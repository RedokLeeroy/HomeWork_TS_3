import React from "react";
import s from "./Modal.module.css"

interface IProp {
  onClose: () => void
  largeimg: string
}

export class Modal extends React.Component<IProp, unknown> {

  componentDidMount() {
    window.addEventListener('keydown', this.handleCloseModal);
    document.body.classList.add('no-scroll');
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleCloseModal);
    document.body.classList.remove('no-scroll');
  }

  handleCloseModal = (event: KeyboardEvent): void => {
    if (event.code === 'Escape') {
      this.props.onClose()
    }
  };

  backDropClick = (event: React.MouseEvent<HTMLElement>) => {
    if (event.currentTarget === event.target) {
      this.props.onClose()
    }
  };
  render() {
    return (
      <div onClick={this.backDropClick} className={s.backDrop}>
        <div className={s.modal}>
          <img src={this.props.largeimg} alt="pictr" />
        </div>
      </div>
    );
  }
}

