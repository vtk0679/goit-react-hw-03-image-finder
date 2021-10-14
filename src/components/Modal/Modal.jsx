import PropTypes from "prop-types";
import { createPortal } from "react-dom";
import { Component } from "react";

import s from "./Modal.module.css";
import { ReactComponent as IconClose } from "../../icon-close.svg";

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = (e) => {
    if (e.code === "Escape") {
      this.props.onCloseModal();
    }
  };

  render() {
    const { src, onCloseModal, modalRoot } = this.props;
    return createPortal(
      <>
        <div
          className={s.Overlay}
          onClick={(e) => {
            if (e.currentTarget === e.target) {
              onCloseModal();
            }
          }}
        >
          <div className={s.Modal}>
            <img src={src} alt="" width="1200px" height="800px" />
            <button
              className={s.closeModal}
              type="button"
              onClick={() => onCloseModal()}
            >
              <IconClose className={s.IconClose} />
            </button>
          </div>
        </div>
      </>,
      modalRoot
    );
  }
}

Modal.propTypes = {
  src: PropTypes.string.isRequired,
  onCloseModal: PropTypes.func.isRequired,
};
