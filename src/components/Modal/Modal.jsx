import PropTypes from "prop-types";
import { createPortal } from "react-dom";

import s from "./Modal.module.css";
import { ReactComponent as CloseLogo } from "../../icon-close.svg";

export default function Modal({ src, onCloseModal, modalRoot }) {
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
            <CloseLogo className={s.CloseLogo} />
          </button>
        </div>
      </div>
    </>,
    modalRoot
  );
}

Modal.propTypes = {
  src: PropTypes.string.isRequired,
  onCloseModal: PropTypes.func.isRequired,
};
