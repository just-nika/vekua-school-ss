import React from 'react';
import './App.css';
import Header from './screens/header';
import MessengerCustomerChat from 'react-messenger-customer-chat';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

function App() {
  const [toggleDark, settoggleDark] = React.useState(false);
  React.useEffect(() => {
    settoggleDark(JSON.parse(window.localStorage.getItem('toggleDark')));
  }, []);
  React.useEffect(() => {
    window.localStorage.setItem('toggleDark', toggleDark);
  }, [toggleDark]);
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          type: toggleDark ? "dark" : "light",
      },
    }),
  [toggleDark],
);
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline/>
          <Header toggleDark={toggleDark} settoggleDark={settoggleDark} />
          {/* <Footer /> */}
          <MessengerCustomerChat pageId="106917272717592" appId="240837167793277" />
      </ThemeProvider>
    </div>
  );
}

export default App;