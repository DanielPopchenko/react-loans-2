import { useEffect, useState } from 'react';
import data from '../../loans.json';
import { formatAmountToNumber, formatAmountToString } from '../../utils/utils';
import Loan from '../loan/Loan';

const LoansList = () => {
  const [loans, setLoans] = useState([]);
  const newLoans = [...data.data];

  useEffect(() => {
    setLoans(newLoans);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleInvest = (item, value) => {
    const allLoans = [...loans];

    const updatedLoans = allLoans.map((loan) => {
      if (loan.id === item.id) {
        return {
          ...loan,
          invested: true,
          available: formatAmountToString(formatAmountToNumber(loan.available) - value),
        };
      } else {
        return loan;
      }
    });
    setLoans(updatedLoans);
  };

  const totalAmountLeft = loans.reduce((acc, loan) => {
    const available = formatAmountToNumber(loan.available);

    return acc + available;
  }, 0);

  console.log('loans :', loans);

  return (
    <div>
      <ul>
        {loans.map((loan) => (
          <Loan key={loan.id} loan={loan} handleInvest={handleInvest} />
        ))}
      </ul>

      <p
        style={{
          fontSize: 20,
          fontWeight: 600,
          marginTop: 60,
        }}
      >
        Total amount available for investment:{' '}
        <span style={{ marginLeft: 319 }}>
          ${totalAmountLeft.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        </span>
      </p>
    </div>
  );
};

export default LoansList;

// ! Попробовать сделать смену темы с помощью контекста или чего нибудь другого
