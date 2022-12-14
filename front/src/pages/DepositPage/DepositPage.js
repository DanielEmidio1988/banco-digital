import Header from '../../components/Header'
import FinancialRelease from '../../components/FinancialRelease'
import { goToDepositDetailsPage } from '../../routes/coordinator'
import { GlobalContext } from '../../context/GlobalContext'
import { useContext } from 'react'

function DepositPage (){
  const financialOperation = "depositado"
  const context = useContext(GlobalContext)
  const {financialValue, setFinancialValue, accountUser} = context

    return(
        <>
        <Header/>
        <FinancialRelease
        financialOperation={financialOperation}
        goToPage={goToDepositDetailsPage}
        financialValue={financialValue}
        setFinancialValue={setFinancialValue}
        accountUser={accountUser}/>
        </>
    )
}

export default DepositPage