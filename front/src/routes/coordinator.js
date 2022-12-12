export function goToLoginPage(navigate){
    navigate("/")
}

export function goToHomePage(navigate){
    navigate("/main")
}

export function goToRegisterPage(navigate){
    navigate("/cadastro")
}

export function goToDepositPage(navigate){
    navigate("/deposito")
}

export function goToDepositDetailsPage(navigate){
    navigate("/deposito/:accountId")
}

export function goToTransferPage(navigate){
    navigate("/transferencia")
}

export function goToTransferDetailsPage(navigate){
    navigate("/transferencia/:accountId")
}

export function goToSucessPage(navigate){
    navigate("/operacaoconcluida")
}