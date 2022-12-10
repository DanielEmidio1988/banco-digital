import Header from '../../components/Header'
import FinancialRelease from '../../components/FinancialRelease'
import { goToDepositDetailsPage } from '../../routes/coordinator'

function DepositPage (){
  const financialOperation = "depositado"
  const taxaOperacional = 0 //Aplicavel somente em caso de atualização da negociação de taxas

    return(
        <>
        <Header/>
        <FinancialRelease
        financialOperation={financialOperation}
        goToPage={goToDepositDetailsPage}/>
        </>
    )
}

export default DepositPage