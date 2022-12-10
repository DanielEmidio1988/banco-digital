import Header from "../../components/Header"
import FinancialRelease from '../../components/FinancialRelease'
import { goToTransferDetailsPage } from "../../routes/coordinator"

function TransferPage (){
  const financialOperation = "transferido"
  const taxaOperacional = 0 //Aplicavel somente em caso de atualização da negociação de taxas

    return(
        <>
        <Header/>
        <FinancialRelease
        financialOperation={financialOperation}
        goToPage={goToTransferDetailsPage}/>       
        </>
    )
}

export default TransferPage