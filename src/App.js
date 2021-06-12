import React from 'react';
import './App.css';
import Header from './screens/header';
import MessengerCustomerChat from 'react-messenger-customer-chat';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Footer /> */}
      <MessengerCustomerChat pageId="106917272717592" appId="240837167793277" />
    </div>
  );
}

export default App;