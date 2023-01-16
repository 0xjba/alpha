import React from "react";
import { useAuth } from "@arcana/auth-react";
import './App.css';
import Home from './page/Home';
import { Routes, Route } from "react-router";

function App() {
  const { loading, isLoggedIn, connect, user } = useAuth()

  const onConnectClick = async () => {
    try {
      await connect();
    } catch (err) {
      console.log({ err });
      // Handle error
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }
  if (!isLoggedIn) {
    return (
      <button onClick={onConnectClick}>
        Signup
      </button>
    );
  }
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App