import Header from "../../components/Header"
import { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { BASE_URL } from '../../constants/url'
import { goToHomePage, goToTransferPage, goToLoginPage } from '../../routes/coordinator'
import { GlobalContext } from '../../context/GlobalContext'

function TransferDetailsPage() {

//Daniel: variavel que será utilizada para busca de conta beneficiaria da transferência
const [searchAccount, setSearchAccount] = useState("")

//Daniel: variável que será utilizada para armazenar os dados da conta beneficiaria da transferência
const [beneficiaryAccount, setBeneficiaryAccount] = useState({
  cpf: searchAccount === ""? "": parseInt(searchAccount),
  name: "",
  accountValue: "",
  password: ""
})

const context = useContext(GlobalContext)
const {accountUser, isLoading, setIsLoading, financialValue, setFinancialValue} = context
const navigate = useNavigate()

//Daniel: variável que será utilizada para armazenar o valor atual da conta do usuário com o valor transferido
const newValue = accountUser.accountValue - financialValue

//Daniel: variável que será utilizada para armazenar o valor atual da conta do beneficiário com o valor transferido
const newValueBeneficiary = beneficiaryAccount.accountValue + financialValue

const searchBeneficiaryAccount = async(event)=> {
  event.preventDefault()

  try{
    setIsLoading(true)
    if(searchAccount == accountUser.cpf){
      alert(`CPF Inválido. Favor, informar outro número.`)
      setIsLoading(false)
      return
    }
    const body = {
      cpf: searchAccount,
      name: beneficiaryAccount.name,
      accountValue: beneficiaryAccount.accountValue,
      password: beneficiaryAccount.password
    }

    const response = await axios.get(`${BASE_URL}/user/${searchAccount}`,body)
    setBeneficiaryAccount(response.data)
    setIsLoading(false)
    return

  }catch(error){
    alert(`Erro de conexão com a base de dados nº ${error.response.status}.\nTipo não mapeado. Favor verificar!`)
    console.log(`Erro de conexão com a base de dados nº ${error.response.status}.\nTipo não mapeado. Favor verificar!`)
    console.log('Detalhes: ',error)
    console.log(error)
    setIsLoading(false)
  }
}

//Daniel: função utilizada para atualizar as informações da conta do usuário
const confirmTransaction = async (event)=>{
  event.preventDefault()

  try{
    if(financialValue > accountUser.accountValue){    
      alert(`Você não tem saldo suficiente para esta transação`)
      return        
    }
    
    setIsLoading(true)
    const body = {
      name: accountUser.name,
      cpf: accountUser.cpf,
      password: accountUser.password,
      accountValue: newValue
    }

    await axios.put(`${BASE_URL}/user/${accountUser.cpf}`,body)
    setFinancialValue(0)
    confirmTransactionBeneficiary()

  }catch(error){
    console.log(error)
    setIsLoading(false)
}
}

//Daniel: função utilizada para atualizar as informações da conta do beneficiário
const confirmTransactionBeneficiary = async ()=>{

  try{

    const body = {
      name: beneficiaryAccount.name,
      cpf: beneficiaryAccount.cpf,
      password: beneficiaryAccount.password,
      accountValue: newValueBeneficiary
    }

   await axios.put(`${BASE_URL}/user/${beneficiaryAccount.cpf}`,body)
    // window.localStorage.setItem("tokenBancoDigital", response.data.token)
    alert(`Operação concluida com sucesso!`)
    setFinancialValue(0)
    setIsLoading(false)
    goToHomePage(navigate)
  }catch(error){
    console.log(error)
    setIsLoading(false)
}
}

useEffect(() => {
  if (!context.isAuth) {
      window.localStorage.removeItem("tokenBancoDigital")
      goToLoginPage(navigate)
  }
}, [])

  return (
    <>
    <Header/>
    <div className="overflow-hidden bg-white shadow sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h2 className="text-lg font-medium leading-6 text-gray-900">Transferência entre contas</h2>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">Confira as informações do beneficiário</p>
      </div>

      <div className="px-4 py-5 sm:px-6">
        <p className="mt-1 max-w-2xl text-sm text-gray-900">Informe o nº do CPF do beneficiário</p>
        <input
            value={searchAccount}
            onChange={(event)=>setSearchAccount(event.target.value)}
            type="text"
            name="first-name"
            id="first-name"
            required
            autoComplete="off"
            className="mt-1 block px-12 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
            <button
              onClick={searchBeneficiaryAccount}
              type="submit"
              className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-16 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
                {isLoading ? 'Carregando...':'Pesquisar'}
            </button>
      </div>
      
      <div className="border-t border-gray-200">
        <dl>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">CPF</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{beneficiaryAccount.cpf}</dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Nome:</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{beneficiaryAccount.name}</dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Valor de Transferência</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">R$ {financialValue}</dd>
          </div>
          <div className="bg-gray-50 px-4 py-6 text-center sm:px-6">
            <button
                type="submit"
                onClick={()=>goToTransferPage(navigate)}
                className="mr-20 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-16 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
                Voltar
            </button>

            <button
                type="submit"
                onClick={confirmTransaction}
                className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-16 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
                {isLoading ? 'Carregando...':'Transferir'}
            </button>
          </div>

        </dl>
      </div>
    </div>
    </>
  )
}


export default TransferDetailsPage