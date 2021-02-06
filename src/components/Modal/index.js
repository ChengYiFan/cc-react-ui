import React from 'react';
import styles from './index.less';

const Modal = (props) => {
  const { title, visible, children, onOk, onCancel, okText, cancelText } = props;
  if (!visible) {
    return null;
  }
  return (
    <div>
      <div className={styles.modalMask} onClick={onCancel} />
      <div className={styles.modalContainer}>
        <header className={styles.modalTitle}>{title}</header>
        <div className={styles.modalBody}>{children}</div>
        <div className={styles.modalFooter}>
          <button className={styles.cancelBtn} type='button' onClick={onCancel}>
            {cancelText}
          </button>
          <button className={styles.confirmBtn} type='button' onClick={onOk}>
            {okText}
          </button>
        </div>
      </div>
    </div>
  );
};

Modal.defaultProps = {
  okText: '确认',
  cancelText: '取消',
  visible: false
};

export default Modal;
