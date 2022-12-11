import Router from "./routes/Router"
import React, { useState } from "react";
import { GlobalContext } from "./context/GlobalContext";

function App() {

  const [accountUser, setAccountUser] = useState({
    cpf:"",
    name: "",
    accountValue: 0,
  })

  const context ={
    accountUser: accountUser,
  }
 
  return (
    <>
    <GlobalContext.Provider value={context}>
    <Router/>
    </GlobalContext.Provider>
    </>

  );
}

export default App;
