import Router from "./routes/Router"
import React, { useState, useEffect} from "react";
import { GlobalContext } from "./context/GlobalContext";
import { useForm } from "./components/useForm";

function App() {

  const [accountUser, onChangeForm] = useForm({cpf:"",password:"",accountValue:0})
  const [isLoading, setIsLoading] = useState(false)
  const [ isAuth, setIsAuth ] = useState(false)
  const [financialValue, setFinancialValue] = useState(0)

  useEffect(() => {
      const token = window.localStorage.getItem("tokenBancoDigital")

      if (token) {
          setIsAuth(true)
      }
  }, [])

  const context ={
    accountUser,
    isLoading,
    setIsLoading,
    onChangeForm,
    isAuth,
    setIsAuth,
    financialValue,
    setFinancialValue,
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
