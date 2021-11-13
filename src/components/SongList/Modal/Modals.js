import './modals.css';
import React from 'react';

const Modals = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <button type="button" onClick={handleClose}>
          YES
        </button>

        <button type="button" onClick={handleClose}>
          NO
        </button>
      </section>
    </div>
  );
};

export default Modals;