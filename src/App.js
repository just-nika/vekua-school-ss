import React, { useEffect } from 'react';
import {
  auth
} from './firebase/firebase.config';
import logo from './logo.svg';
import './App.css';
import Login from './screens/login';
import Header from './screens/header';
import Footer from './screens/footer';
import TextEditor from './screens/texteditor';
import MessengerCustomerChat from 'react-messenger-customer-chat';

function App() {
  return (
    <div className="App">
      <Header />
      <Footer />
    </div>
  );
}

export default App;