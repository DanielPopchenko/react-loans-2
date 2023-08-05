import { useState } from 'react';

import styles from './Loan.module.css';
import Modal from '../modal/Modal';

const Loan = ({ loan, handleInvest }) => {
  const [openModal, setOpenModal] = useState(false);

  const onOpenModal = () => {
    setOpenModal((prev) => !prev);
  };
  return (
    <>
      <li className={styles.loan}>
        <div className="loanContent">
          <h3 className={styles.loanTitle}>{loan.title}</h3>
          <p className={styles.loanText}>Loan details and values</p>
        </div>

        <div className="" style={{ display: 'flex', flexDirection: 'column' }}>
          {loan.invested && (
            <span
              style={{
                color: '#51A571',
                fontSize: 16,
                fontWeight: 600,
                marginBottom: 3,
              }}
            >
              Invested
            </span>
          )}

          <button type="button" className={styles.loanButton} onClick={onOpenModal}>
            INVEST
          </button>
        </div>
      </li>

      {openModal && <Modal loan={loan} onOpenModal={onOpenModal} handleInvest={handleInvest} />}
    </>
  );
};

export default Loan;
