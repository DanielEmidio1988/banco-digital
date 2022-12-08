import { useParams } from "react-router-dom"

function TransferDetailsPage (){
    const params = useParams()

    return(
        <>
        <h1>TransferDetailsPage</h1>
        {/* Informação abaixo será usada para a conta do usuário */}
        {params.accountId} 
        </>
    )
}

export default TransferDetailsPage