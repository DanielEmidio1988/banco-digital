import Header from '../../components/Header'

// VERIFICAR PÁGINA
function SucessPage(){
    // const login = (event)=>{
    //     event.preventDefault()
    //     goToHomePage(navigate)
    //   }

    return(
        <>
        <Header/>
        <h1>Operação concluida com sucesso!</h1>
        <button
                
                type="submit"
                className="group relative flex px-12 justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  
                </span>
                Finalizar Operação
              </button>
        </>
    )
}

export default SucessPage