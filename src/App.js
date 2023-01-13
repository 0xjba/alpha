import React from "react";
import { Auth } from "@arcana/auth-react";
import './App.css';

export default function App() {
  const [externalWallet] = React.useState(false);
  return (
    <div className="wrapper">
      <div className="leftSection">
      </div>
      <div className="rightSection">
        <Auth externalWallet={externalWallet} />
      </div>
    </div>
  );
}

