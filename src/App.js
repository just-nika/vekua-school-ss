import React, { useEffect } from 'react';
import {
  auth
} from './firebase/firebase.config';
import logo from './logo.svg';
import './App.css';
import Login from './screens/login';
import Header from './screens/header';
import TextEditor from './screens/texteditor';

function App() {
  return (
    <div className="App">
      <Header></Header>
    </div>
  );
}

export default App;