import Header from "../../components/Header"
import FinancialRelease from '../../components/FinancialRelease'
import { goToTransferDetailsPage, goToHomePage, goToLoginPage } from "../../routes/coordinator"
import { GlobalContext } from '../../context/GlobalContext'
import { useContext, useEffect } from 'react'
import { useNavigate } from "react-router-dom"

function TransferPage (){
  const financialOperation = "transferido"
  const context = useContext(GlobalContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (!context.isAuth) {
        window.localStorage.removeItem("tokenBancoDigital")
        goToLoginPage(navigate)
    }
  }, [])

    return(
        <>
        <Header/>
        <FinancialRelease
        financialOperation={financialOperation}
        goToPage={goToTransferDetailsPage}
        goToBackPage={goToHomePage}
        financialValue={context.financialValue}
        setFinancialValue={context.setFinancialValue}
        accountUser={context.accountUser}/>       
        </>
    )
}

export default TransferPage