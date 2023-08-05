import React, { useContext } from 'react';
import Container from './components/container/Container';
import Header from './components/header/Header';
import LoansList from './components/loans-list/LoansList';
import { ThemeContext } from './components/theme-provider/Theme';
import './components/theme-provider/theme.css';

const App = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  console.log('theme: ', theme);

  const handleSwitchTheme = () => {
    if (theme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };

  return (
    <div className="App" data-theme={theme}>
      <div className="ball" onClick={handleSwitchTheme} />
      <Header></Header>
      <hr style={{ backgroundColor: 'rgba(48, 50, 71, 0.1)' }} />
      <Container>
        <LoansList />
      </Container>
    </div>
  );
};

export default App;
