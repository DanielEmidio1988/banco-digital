import Header from "../../components/Header"
import { useState } from "react"
import axios from 'axios'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { BASE_URL } from '../../constants/url'
import { goToHomePage } from '../../routes/coordinator'
import { GlobalContext } from '../../context/GlobalContext'

function TransferDetailsPage() {

// const params = useParams()
const beneficiaryAccount ={
  account: "",
  cpf: "",
  name: "",
}

//ALTERAR O NOME DA VARIAVEL
const [searchAccount, setSearchAccount] = useState("")
const context = useContext(GlobalContext)
const {accountUser, isLoading, setIsLoading, onChangeForm, financialValue, setFinancialValue} = context
const navigate = useNavigate()
const newValue = financialValue + accountUser.accountValue

// const confirmTransaction = async (event)=>{
//   event.preventDefault()
//   try{
//     setIsLoading(true)
//   const body = {
//     accountValue: accountUser.accountValue
//   }
//   const response = await axios.patch(`${BASE_URL}/user/${accountUser.cpf}`,body)
//   window.localStorage.setItem("tokenBancoDigital", response.data.token)
//   alert(`Operação concluida com sucesso!`)
//   setFinancialValue(0)
//   setIsLoading(false)
//   goToHomePage(navigate)
// }catch(error){
//     console.log(error)
//     setIsLoading(false)
// }
// }

// const searchAccount = async (event)=>{
//   event.preventDefault()

//   try{
//     setIsLoading(true)

//     const body = {
//       cpf: accountUser.cpf,
//       password: accountUser.password
//     }
//     const response = await axios.post(
//       `${BASE_URL}/user/login`, body
//     )

//     console.log("Body:", body)
//     console.log("response", response)
  
//      window.localStorage.setItem("tokenBancoDigital", response.data.token)
//      console.log("Deu certo!")
//      setIsLoading(false)
//      goToHomePage(navigate)
//   }catch(error){
//     setIsLoading(false)
//     console.log("Deu erro!")
//     console.log(error)
//   }
// }

// function confirmOperation(){
//   if(searchAccount === beneficiaryAccount.cpf){
//     setContaBuscada({...beneficiaryAccount})
//   }else{
//     alert(`Conta não encontrada!`)
//     setContaBuscada({})
//   }
// }


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
            value={beneficiaryAccount}
            onChange={(event)=>setSearchAccount(event.target.value)}
            type="text"
            name="first-name"
            id="first-name"
            required
            autoComplete="off"
            className="mt-1 block px-12 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
            <button
              // onClick={()=>confirmOperation()}
              type="submit"
              className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-16 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
                Pesquisar
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
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">$120,000</dd>
          </div>
          <div className="bg-gray-50 px-4 py-6 text-center sm:px-6">
            <button
                type="submit"
                // onClick={confirmTransaction}
                className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-16 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
                Avançar
            </button>
          </div>

        </dl>
      </div>
    </div>
    </>
  )
}


export default TransferDetailsPage