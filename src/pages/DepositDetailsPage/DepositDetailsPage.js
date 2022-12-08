import { useParams } from "react-router-dom"

function DepositDetailsPage (){
    const params = useParams()

    return(
        <>
        <h1>DepositDetailsPage</h1>
        {/* Informação abaixo será usada para a conta do usuário */}
        {params.accountId} 
        </>
    )
}

export default DepositDetailsPage