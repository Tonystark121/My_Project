import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import React, { useState, useEffect } from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const userToggle = (value) => {
    setIsLoggedIn(value);
  }

  useEffect(() => {
    console.log(isLoggedIn);
  }, [isLoggedIn]);

  return (
    <div className="App">
       {!isLoggedIn && <Login onUserInput={userToggle} />}
       {isLoggedIn && <Dashboard onUserInput={userToggle} />}
    </div>
  );
}

export default App;
