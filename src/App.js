import React from 'react';
import './App.css';
import Header from './screens/header';
import MessengerCustomerChat from 'react-messenger-customer-chat';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Loading from './screens/loading';

function App() {
  const [toggleDark, settoggleDark] = React.useState(false);
  const [pageLoading, setLoading] = React.useState(true)
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
    const Main = () => {
      return <>
         <div className="App">
            <ThemeProvider theme={theme}>
              <CssBaseline/>
                <Header toggleDark={toggleDark} settoggleDark={settoggleDark} />
                <MessengerCustomerChat pageId="106917272717592" appId="240837167793277" />
            </ThemeProvider>
          </div>
      </>
    }
    var t0 = performance.now()
    Main()
    var t1 = performance.now()
    const time = (t1 - t0) + 3000;
    setTimeout(Load, time)
    function Load() {
      setLoading(false)
    }
    return (
      pageLoading ? 
        <> 
          <Loading />
        </>
          :
        <>
          <Main />
        </>
    )
}

export default App;