import Header from "../../components/Header"
import axios from 'axios'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { BASE_URL } from '../../constants/url'
import { goToHomePage } from '../../routes/coordinator'
import { GlobalContext } from '../../context/GlobalContext'

function DepositDetailsPage (){
    const context = useContext(GlobalContext)
    const {accountUser, setAccountUser, isLoading, setIsLoading, financialValue, setFinancialValue} = context
    const navigate = useNavigate()
    const newValue = financialValue + accountUser.accountValue


    // financialValue > 0? setNewValue(financialValue + accountUser.accountValue):0

    const confirmTransaction = async (event)=>{
      event.preventDefault()


      try{

        setIsLoading(true)
        const body = {
          name: accountUser.name,
          cpf: accountUser.cpf,
          password: accountUser.password,
          accountValue: newValue
        }

        const response = await axios.put(`${BASE_URL}/user/${accountUser.cpf}`,body)
        // window.localStorage.setItem("tokenBancoDigital", response.data.token)
        alert(`Operação concluida com sucesso!`)
        console.log("body.accountValue",body)
        console.log("newValue",newValue)
        console.log('response',response)
        setFinancialValue(0)
        // setAccountUser(response.data)
        setIsLoading(false)
        goToHomePage(navigate)
      }catch(error){
        console.log(error)
        setIsLoading(false)
    }
    }

    // financialValue + accountUser.accountValue

    return(
        <>
    <>
    <Header/>
    <div className="overflow-hidden bg-white shadow sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h2 className="text-lg font-medium leading-6 text-gray-900">Depósito em conta</h2>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">Confira as informações de Depósito</p>
      </div>
      
      <div className="border-t border-gray-200">
        <dl>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Cliente</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{accountUser.name}</dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Saldo Atual</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">R$ {accountUser.accountValue}</dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Valor Depositado</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">R$ {financialValue}</dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Total Operação</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">R$ {newValue}</dd>
          </div>
          <div className="bg-gray-50 px-4 py-6 text-center sm:px-6">
            <button
                type="submit"
                onClick={confirmTransaction}
                className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-16 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
                {isLoading ? 'Carregando...':'Avançar'}
            </button>
          </div>

        </dl>
      </div>
    </div>
    </>
        </>
    )
}

export default DepositDetailsPage