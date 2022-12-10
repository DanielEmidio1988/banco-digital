import { useState } from "react"
import { useNavigate } from "react-router-dom"

function FinancialRelease(props){

    const [financialValue, setFinancialValue] = useState(0)
    const navigate = useNavigate()

  function confirmOperationTransaction(event){ 
    event.preventDefault()
    if(financialValue > 2000){
        alert(`Valor informado acima limite cadastrado!\nFavor, informar um novo valor.`)
    }else if(financialValue === 0){
        alert(`Favor, informe o valor a ser ${props.financialOperation}`)
    }else if(financialValue < 0){
        alert(`Favor, informe um valor válido`)
    }else{
        props.goToPage(navigate)
    }
} 

    return(
    <>
        <div className="hidden sm:block" aria-hidden="true">
          <div className="py-5">
            <div className="border-t border-gray-200" />
            <h2 className="text-lg font-medium leading-6 text-gray-900">Qual o valor a ser {props.financialOperation}?</h2>
                <p className="mt-1 text-sm text-gray-600">Saldo R$ 0.00</p>
          </div>
        </div>
  
        <div className="mt-10 sm:mt-0">
          <div className="md:grid md:grid-cols-3 md:gap-6">
            <div className="mt-5 md:col-span-2 md:mt-0">
              <form action="#" method="POST">
                <div className="overflow-hidden shadow sm:rounded-md">
                  <div className="bg-white px-4 py-5 sm:p-6">
                    <div className="grid grid-cols-6 gap-6">
                      
                      <div className="col-span-6 sm:col-span-3">
                        <input
                          value={financialValue}
                          onChange={(event)=>setFinancialValue(event.target.value)}  
                          type="text"
                          name="first-name"
                          id="first-name"
                          required
                          autoComplete="off"
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                        <label htmlFor="first-name" className="block text-sm font-medium text-gray-600">
                          Digite um valor de até R$ 2.000
                        </label>
                      </div>

                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 sm:px-6">
                    
                    <button
                      onClick={confirmOperationTransaction}
                      type="submit"
                      className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-12 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      Avançar
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
  
        <div className="hidden sm:block" aria-hidden="true">
          <div className="py-5">
            <div className="border-t border-gray-200" />
          </div>
        </div>
    </>
    )
}

export default FinancialRelease