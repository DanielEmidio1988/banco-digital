import Header from "../../components/Header"
import FinancialRelease from '../../components/FinancialRelease'
import { goToTransferDetailsPage } from "../../routes/coordinator"
import { GlobalContext } from '../../context/GlobalContext'
import { useContext } from 'react'

function TransferPage (){
  const financialOperation = "transferido"
  const context = useContext(GlobalContext)
  const {financialValue, setFinancialValue, accountUser} = context

    return(
        <>
        <Header/>
        <FinancialRelease
        financialOperation={financialOperation}
        goToPage={goToTransferDetailsPage}
        financialValue={financialValue}
        setFinancialValue={setFinancialValue}
        accountUser={accountUser}/>       
        </>
    )
}

export default TransferPage