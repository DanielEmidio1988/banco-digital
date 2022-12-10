import { useParams } from "react-router-dom"
import Header from "../../components/Header"
import { useState } from "react"

function TransferDetailsPage() {

// const params = useParams()
const beneficiaryAccount ={
  account: 2,
  cpf: "12345678911",
  name: "Cassia Oliveira",
}

//ALTERAR O NOME DA VARIAVEL
const [contaBuscada, setContaBuscada] = useState({
  account: "",
  cpf: "",
  name: "",
})

//MUDAR O NOME DA VARIAVEL
const [searchAccount, setSearchAccount] = useState("")

function confirmOperation(){
  if(searchAccount === beneficiaryAccount.cpf){
    setContaBuscada({...beneficiaryAccount})
  }else{
    alert(`Conta não encontrada!`)
    setContaBuscada({})
  }
}


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
              onClick={()=>confirmOperation()}
              type="submit"
              className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-16 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
                Pesquisar
            </button>
      </div>
      
      <div className="border-t border-gray-200">
        <dl>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Conta</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{contaBuscada.account}</dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">CPF</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{contaBuscada.cpf}</dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Nome Completo</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{contaBuscada.name}</dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Valor de Transferência</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">$120,000</dd>
          </div>
          <div className="bg-gray-50 px-4 py-6 text-center sm:px-6">
            <button
                type="submit"
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