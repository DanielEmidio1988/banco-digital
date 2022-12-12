import Header from '../../components/Header'
import FinancialRelease from '../../components/FinancialRelease'
import { goToDepositDetailsPage } from '../../routes/coordinator'
import { GlobalContext } from '../../context/GlobalContext'
import { useContext } from 'react'

function DepositPage (){
  const financialOperation = "depositado"
  const context = useContext(GlobalContext)
  const {financialValue, setFinancialValue} = context
  const taxaOperacional = 0 //Aplicavel somente em caso de atualização da negociação de taxas

    return(
        <>
        <Header/>
        <FinancialRelease
        financialOperation={financialOperation}
        goToPage={goToDepositDetailsPage}
        financialValue={financialValue}
        setFinancialValue={setFinancialValue}/>
        </>
    )
}

export default DepositPage