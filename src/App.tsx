import React, { useState } from 'react';
import './App.scss';
import Login from './pages/Login';
import Main from './pages/Main';

export interface User {
  fName: string;
  lName: string;
  email: string;
  username: string;
}

function App() {

  const [auth, setAuth] = useState<boolean>(false);
  const [userData, setUserData] = useState<User | null>(null);
  return (
    <div className="App">
      {auth ? <Main userData={userData} setUserData={setUserData} setAuth={setAuth} /> : <Login setAuth={setAuth} setUserData={setUserData} />}
    </div>
  );
}

export default App;
