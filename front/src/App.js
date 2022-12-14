import Router from "./routes/Router"
import React, { useState, useEffect} from "react";
import { GlobalContext } from "./context/GlobalContext";


function App() {

  //Daniel: accountUser que será utilizado para armazenar os dados do cliente
  const [accountUser, setAccountUser] = useState({name:"",cpf:"",password:"",accountValue:0})
  
  //Daniel: isLoading será utilizada para status de carregamento (loading) de requisições da Base de Dados
  const [isLoading, setIsLoading] = useState(false)

  //Daniel: isAuth será utilizado para autenticar se o usuário já fez login ou não na página.
  const [ isAuth, setIsAuth ] = useState(false)

  //Daniel: financialValue será utilizado para armazenar valores financeiros como Depósito ou Transferência antes da confirmação da
  const [financialValue, setFinancialValue] = useState(0)

  //Daniel: caso a página seja recarregada e houver um token, o usuário permanecerá na tela.
  useEffect(() => {
      const token = window.localStorage.getItem("tokenBancoDigital")

      if (token) {
          setIsAuth(true)
      }
  }, [])

  const onChangeForm = (event) =>{
    setAccountUser({...accountUser, [event.target.name]:event.target.value})
  }

  const context ={
    accountUser,
    setAccountUser,
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
