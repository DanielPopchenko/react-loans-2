import { useState } from 'react';
import styles from './Modal.module.css';
import { RxCross1 } from 'react-icons/rx';
import Swal from 'sweetalert2';
import { countHours, formatAmountToNumber, formatAmountToString } from '../../utils/utils';

function Modal({ loan, onOpenModal, handleInvest }) {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState(false);

  const availableAmount = formatAmountToString(formatAmountToNumber(loan.available));

  const handleInputError = (inputValue, currentAvailableSum) => {
    if (inputValue > currentAvailableSum || inputValue === 0) {
      setError(true);
    } else if (isNaN(inputValue)) {
      setError(true);
      Swal.fire('Oops!', 'Please, enter a number.', 'error');
      setInputValue('');
    } else {
      setError(false);
    }
  };

  const handleValueChange = (event) => {
    const { value } = event.target;

    const valueNumber = formatAmountToNumber(value);
    setInputValue(formatAmountToString(valueNumber));

    handleInputError(valueNumber, formatAmountToNumber(loan.available));
  };

  const addInvest = (event) => {
    event.preventDefault();
    handleInvest(loan, formatAmountToNumber(inputValue));
    onOpenModal();
    Swal.fire('Good!', 'You have successfully invested!', 'success');
  };

  return (
    <>
      <div id="myModal" className={styles.modal}>
        <div className={styles.modalContent}>
          <span className={styles.closeBtn} onClick={() => onOpenModal()}>
            <RxCross1 style={{ cursor: 'pointer', padding: 2, fontSize: 30 }} />
          </span>
          <h2 className={styles.modalTitle}>Invest in loan</h2>
          <p className={styles.loanTitle}>{loan.title}</p>
          <p className={styles.amountAvailable}>Amount available: ${availableAmount}</p>
          <p className={styles.endsIn}>Loan ends in: {countHours(loan.term_remaining)}</p>
          <div className={styles.invest}>
            <h3>Investment amount</h3>
            <form onSubmit={addInvest}>
              <input
                type="text"
                className={styles.inputEl}
                value={inputValue}
                placeholder="1.000"
                onChange={handleValueChange}
              />
              <button type="submit" className={styles.modalButton} disabled={error || !inputValue}>
                INVEST
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
