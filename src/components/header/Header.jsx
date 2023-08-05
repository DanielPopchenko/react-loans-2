import React from 'react';

const Header = () => {
  return (
    <header style={{ paddingTop: 32, paddingBottom: 32, paddingLeft: 64 }}>
      <h1
        style={{
          fontSize: 30,
          fontWeight: 600,
        }}
      >
        Current Loans
      </h1>
    </header>
  );
};

export default Header;
